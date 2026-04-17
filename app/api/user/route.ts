import { getUsers } from "@/feature/users/user.services"
import { NextResponse } from "next/server"

export async function GET(request:Request){
    const { searchParams } = new URL(request.url)

    const page = Math.max(1,Number(searchParams.get('page'))) ?? 1
    const take = Math.max(1,Number(searchParams.get('take'))) ?? 1
    const skip = (page-1) * take

    const res = await getUsers(take,skip,page)
    return NextResponse.json(res)

}