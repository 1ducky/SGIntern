'use server'

import prisma from "@/lib/db";


const FORM_TYPES = ["magang", "lowongan", "perusahaan"] as const;
type FormType = typeof FORM_TYPES[number] | undefined;

type Datas = {
    name? : string
    deskripsi? : string
    jurusan? : string
    keahlian? : string
    perusahaanId? : string
    alamat? : string
    imageurl? : string
}

type UploadResponse = {
    status: number
    message?: string | undefined
    data?: unknown
}

async function UploadPerusahaan(data:Datas):Promise<UploadResponse> {
    if (!data.name || !data.alamat) {
        return {
            status: 400,
            message: 'Data Yang Diperlukan Tidak Ditemukan'
        }
    }
    try{
        const existing = await prisma.perusahaan.findFirst({where:{
            name:data.name,
            alamat:data.alamat
        }})
        if (existing) {
            return {
                status: 409,
                message: 'Perusahaan sudah terdaftar'
            }
        }

        const res = await prisma.perusahaan.create({
            data:{
                name:data.name,
                alamat:data.alamat,
                deskripsi:data.deskripsi || null
            }
        })
        if(!res){
            return {status: 409, message:'Gagal Upload'}
        }
        return {status : 200, message:'Berhasil Upload'}
    }catch{
        return {status:400, message: 'Error Internal'}
    }
}

export default async function UploadEntries(Type:FormType,Datas:Datas):Promise<UploadResponse>{

    if( !Type || !Datas ) return {status:400, message:'Kesalahan Request'}

    switch (Type){
        case 'lowongan':
            return  {status:200, message:'Lowongan'}
        case 'magang':
            return {status:300, message:'Magang'}
        case 'perusahaan':
            return UploadPerusahaan(Datas)
        default:
            return {status:400, message:'Tidak Ada Logic'}
    }
}

