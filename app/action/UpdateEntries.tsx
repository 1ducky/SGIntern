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
    imageUrl? : string
}

type UpdateResponse = {
    status: number
    message?: string | undefined
    data?: unknown
}

async function UpdatePerusahaan(data:Datas,id:string):Promise<UpdateResponse> {
    if (!data.name || !data.alamat || !id) {
        return {
            status: 400,
            message: 'Data Yang Diperlukan Tidak Ditemukan'
        }
    }
    try{
        const existing = await prisma.perusahaan.findFirst({where:{
            id
        }  , select:{name:true,alamat:true,deskripsi:true,imageUrl:true}
        })
        if (!existing) {
            return {
                status: 409,
                message: 'Perusahaan tidak terdaftar'
            }
        }

        const isSame = 
            existing.name === data.name &&
            existing.alamat === data.alamat &&
            existing.deskripsi === data.deskripsi &&
            existing.imageUrl === data.imageUrl

        if(isSame) return {
            status: 400,
            message:'Tidak Ada Perubahan Data'
        }

        const res = await prisma.perusahaan.update({
            where:{ id },
            data:{
                name:data.name,
                alamat:data.alamat,
                deskripsi:data.deskripsi || null,
                imageUrl: data.imageUrl
            }
        })
        if(!res){
            return {status: 409, message:'Gagal Update'}
        }
        return {status : 200, message:'Berhasil Update'}
    }catch{
        return {status:400, message: 'Error Internal'}
    }
}

export default async function UpdateEntries(Type:FormType,Datas:Datas,id:string):Promise<UpdateResponse>{

    if( !Type || !Datas ) return {status:400, message:'Kesalahan Request'}

    switch (Type){
        case 'lowongan':
            return  {status:200, message:'Lowongan'}
        case 'magang':
            return {status:200, message:'Magang'}
        case 'perusahaan':
            return UpdatePerusahaan(Datas,id)
        default:
            return {status:400, message:'Tidak Ada Logic'}
    }
}

