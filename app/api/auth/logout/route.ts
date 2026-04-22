import { authLogout } from "@/feature/auth/auth.services";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const jwtToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    if(!jwtToken?.id || !jwtToken?.version){
        return NextResponse.json({ error: 'unauthorized'})
    }
    const result = await authLogout(jwtToken.id,jwtToken.version)
    if(result.error){
        return NextResponse.json({error: 'failed to Logout'})
    }
    const res = NextResponse.json({success: 'Logout Berhasil'})
    res.cookies.set('refreshToken', '', {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/api/auth/refresh',
        maxAge: 0 // Hapus cookie dengan mengatur maxAge ke 0
    })
    return res
}