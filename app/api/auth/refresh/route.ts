import { authRefreshToken, generateRefreshToken } from "@/feature/auth/auth.services";
import { ok } from "@/utils/response-api";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    // Future Update : Make Eksplisit Type
    const rawToken = request.cookies.get('refreshToken')?.value
    const jwtToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    console.log({rawToken,jwtToken})
    if(!rawToken || !jwtToken){
        return NextResponse.json({error: 'No Token Provided'})
    }
    const compareToken = await authRefreshToken(rawToken,jwtToken.id as string)
    if(compareToken.error){
        return NextResponse.json({error: compareToken.error})
    }
    const {refreshToken} = await generateRefreshToken(compareToken.id as string)
    const res = NextResponse.json(ok({compareToken : compareToken},'Berhasil Login'))
    
    res.cookies.set('refreshToken',refreshToken, {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/api/auth/refresh',
        maxAge: 7*24*60*60 // 7 hari
    })    
    return res
    

}