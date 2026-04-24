// import { createUser } from "@/feature/users/user.services"

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {

//   const data = {
//     email:'admin@gmail.com',
//     name:'admin',
//     password:'admin123',
//   }
//   const user = await createUser(data)
//   return Response.json({
//     user
//   })
  
// }

export async function GET(request : NextRequest) {
    const token = await getToken({req:request, secret:process.env.AUTH_SECRET})
    return NextResponse.json({token})
}