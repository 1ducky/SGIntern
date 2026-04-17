import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(req : NextRequest){
    const token = await getToken({req})
    if(!token){
        return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }
    return NextResponse.next()
}

export const config = {
    // protected routes
    matcher: ["/dashboard/:path*"]
}