import { authRefreshEndpoint } from "@/feature/auth/auth.services";
import { failed, ok } from "@/utils/response-api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const refreshToken = request.cookies.get("refreshToken")?.value
    console.log(refreshToken)
    if(!refreshToken){
        return failedCookie("refreshToken", "Token Tidak Ditemukan")
    }
    const [token, userId] = refreshToken.split('|+|')
    if(!refreshToken || !userId){
        return failedCookie("refreshToken", "Token Tidak Valid")
    }
    const user = await authRefreshEndpoint(token,userId)
    if(user?.error){
        return failedCookie("refreshToken", user.error)
    }
    const res = NextResponse.json(ok({user: user?.user}, 'Token Refreshed'))
    res.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60
    })

    return res
}

function failedCookie(field: string, message: string) : NextResponse{
    const res = NextResponse.json(failed(401, "INVALID_TOKEN", message))
    res.cookies.set(field, "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth/refresh",
      maxAge:0
    })
    return res
}