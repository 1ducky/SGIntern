import prisma from "@/lib/db"
import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id") 

  if (!id) {
    return NextResponse.json(
      { message: "id is required" },
      { status: 400 }
    )
  }
  try{
    const res = await prisma.perusahaan.findUnique(
        {
            where:{id},
            select:{
                name:true,
                deskripsi:true,
                id:true,
                alamat:true,
                imageUrl:true
            }
        }
    )
    if(!res) throw error
    return NextResponse.json({ data:res,status:200 })
  }catch{
    // Handler Error
    return NextResponse.json({message:"Gagal Mengambil Daftar Magang", status:500})
}

  
}