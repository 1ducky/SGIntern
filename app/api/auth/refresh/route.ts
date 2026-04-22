import { authCompareRefreshToken, generateRefreshToken } from "@/feature/auth/auth.services";
import { failed, ok } from "@/utils/response-api";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const rawToken = request.cookies.get('refreshToken')?.value
    const jwtToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    console.log({rawToken,jwtToken})
    if(!rawToken || !jwtToken?.id){
        return NextResponse.json(failed(401,'UNAUTHENTICATED', 'Token Tidak Valid'))
    }
    const compareToken = await authCompareRefreshToken(rawToken,jwtToken.id)
    if(compareToken.error){
        return NextResponse.json(failed(401,'UNAUTHENTICATED', compareToken.error))
    }
    if(!compareToken.id || !compareToken.version){
        return NextResponse.json(failed(401,'UNAUTHENTICATED', 'Token Tidak Valid'))
    }
    const {refreshToken} = await generateRefreshToken(compareToken.id, compareToken.version)
    const res = NextResponse.json(ok(null,'Berhasil Merefresh Token'))
    
    res.cookies.set('refreshToken',refreshToken, {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/api/auth/refresh',
        maxAge: 7*24*60*60 // 7 hari
    })    
    return res
    

}