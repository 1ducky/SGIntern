import { failed, ok } from "@/utils/response-api";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest){
    const token = await getToken({req:request, secret:process.env.AUTH_SECRET})
    if(!token?.id || !token?.version) return NextResponse.json(failed(401,'UNAUTH','Unauthrized'))
    
    return NextResponse.json(ok(token,'Berhasil'))

}