import { getUsersSearchName } from "@/feature/users/user.services"
import { NextResponse } from "next/server"

export async function GET(request:Request, {params} : {params: {keyword:string}}){
    const { searchParams } = new URL(request.url)
    const {keyword} = await params
    const page = Math.max(1,Number(searchParams.get('page'))) ?? 1
    const take = Math.max(1,Number(searchParams.get('take'))) ?? 1
    const skip = (page-1) * take

    const res = await getUsersSearchName(take,skip,page,keyword)
    return NextResponse.json(res)
}