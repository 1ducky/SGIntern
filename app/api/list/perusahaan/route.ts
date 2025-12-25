import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

import parseOrderBy from '@/utils/ApiUtils/Sortparse'
import parseSearch from '@/utils/ApiUtils/QueryParse'


// type

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    const orderBy = parseOrderBy(searchParams)
    const search = parseSearch(searchParams)
    try{
        const data = await prisma.perusahaan.findMany({
            where: {
            ...search
            },
            orderBy,
            select: {
                name:true,
                id:true,
                imageUrl:true
            }
        })

        return NextResponse.json(data)
    }catch(error){
                // Handler Error
        console.log("GET /api/user error:", error)
        return NextResponse.json({message:"Gagal Mengambil Daftar Lowongan", status:500})
    }

      
}
