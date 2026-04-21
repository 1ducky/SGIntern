import { authLoginSchema } from "@/feature/auth/auth.schema";
import { authSignin, generateRefreshToken } from "@/feature/auth/auth.services";
import { failed,ok } from "@/utils/response-api";
import parseBody from "@/utils/utils-api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const body = await parseBody(request)
    const parsed = authLoginSchema.safeParse(body)
    if(!parsed.success){
        return NextResponse.json(failed(422,parsed.error.flatten().fieldErrors,'Invalid Field'),{status:422})
    }
    const result = await authSignin(parsed.data)
    if(!result){
        return NextResponse.json(failed(401,'UNAUTHORIZED','Email atau Password Salah'),{status:401})
    }
    const {refreshToken} = await generateRefreshToken(result.id)
    const res = NextResponse.json(ok(result,'Berhasil Login'))

    res.cookies.set('refreshToken',refreshToken, {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/api/auth/refresh',
        maxAge: 7*24*60*60 // 7 hari
    })

    return res
}