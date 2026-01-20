import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { Prisma } from "@/app/generated/prisma/client"

import parseOrderBy from '@/utils/ApiUtils/Sortparse'
import parseSearch from '@/utils/ApiUtils/QueryParse'


// type
import { FILTERABLE_FIELDS } from "@/StatisData/StaticType"
import { FilterField } from "@/StatisData/StaticType"
import { parsePagination } from '@/utils/ApiUtils/PaginationParse'


export default function parseFilters(searchParams: URLSearchParams) : Prisma.LowonganWhereInput | undefined {
    const where: Prisma.LowonganWhereInput = {}

    for (const [key, value] of searchParams.entries()) {
        if (!key.startsWith('order[')) continue

        const field = key.replace('order[', '').replace(']', '')

        if (FILTERABLE_FIELDS.includes(field as FilterField)) {
        where[field as FilterField] = value
        }
    }

    return Object.keys(where).length ? where : undefined
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)


    const orderBy = parseOrderBy(searchParams)
    const filter = parseFilters(searchParams)
    const search = parseSearch(searchParams)
    const pagination = parsePagination(searchParams)

    try{
        const [data,total] = await Promise.all([ prisma.lowongan.findMany({
            where: {
            ...filter,
            ...search,
            },
            orderBy,
            ...pagination,
            select: {
                name:true,
                id:true,
                deskripsi:true,
                jurusan:true,
                keahlian:true,
                perusahaan:{
                    select:{
                        id:true,
                        name:true,
                        imageUrl:true,
                        alamat:true
                    }
                }
            }
        }), prisma.lowongan.count({where:{ ...filter,...search}})])

        return NextResponse.json({data,total})
    }catch(error){
                // Handler Error
        console.log("GET /api/user error:", error)
        return NextResponse.json({message:"Gagal Mengambil Daftar Lowongan", status:500})
    }

      
}
