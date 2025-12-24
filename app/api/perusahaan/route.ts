import prisma from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const q = searchParams.get("q") ?? ""
    try {
        // Coba Mengambil Perusahaan
        const Perusahaan = await prisma.perusahaan.findMany({
            where : {
                name: {
                    contains: q,
                    mode: 'insensitive', // tidak peduli huruf besar/kecil
                }
            },
            select: {
                id: true,
                name: true,
            },
            take:5
        })
        
        return NextResponse.json({status:200, Perusahaan,q})
    } catch (error) {
        // Handler Error
        console.log("GET /api/user error:", error)
        return NextResponse.json({message:"Gagal Mengambil Data User", status:500})
    }
}