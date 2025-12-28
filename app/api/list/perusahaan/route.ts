import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

import parseOrderBy from '@/utils/ApiUtils/Sortparse'
import parseSearch from '@/utils/ApiUtils/QueryParse'
import { parsePagination } from '@/utils/ApiUtils/PaginationParse'


// type

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    const orderBy = parseOrderBy(searchParams)
    const search = parseSearch(searchParams)
    const pagination = parsePagination(searchParams)
    try{
        const [data,total] =await Promise.all([ prisma.perusahaan.findMany({
            where: {
            ...search
            },
            orderBy,
            ...pagination,
            select: {
                name:true,
                id:true,
                imageUrl:true,
                alamat:true,
                deskripsi:true
            }
        }), prisma.perusahaan.count({where:{ ... search}}) ])

        return NextResponse.json({data,total})
    }catch(error){
                // Handler Error
        console.log("GET /api/user error:", error)
        return NextResponse.json({message:"Gagal Mengambil Daftar Lowongan", status:500})
    } 
}
