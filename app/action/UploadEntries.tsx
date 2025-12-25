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
        if(!data.imageUrl) return{
            status:401,
            message:'Foto Profile Belum Dipilih'
        }

        const res = await prisma.perusahaan.create({
            data:{
                name:data.name,
                alamat:data.alamat,
                deskripsi:data.deskripsi || null,
                imageUrl:data.imageUrl || ''
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
async function UploadMagang(data:Datas):Promise<UploadResponse> {
    if (!data.name || !data.jurusan || !data.keahlian || !data.perusahaanId) {
        return {
            status: 400,
            message: 'Data Yang Diperlukan Tidak Ditemukan'
        }
    }
    try{
        const existing = await prisma.perusahaan.findFirst({where:{
            id:data.perusahaanId,
        }})

        if (!existing) {
            return {
                status: 409,
                message: 'Tidak Ada Perusahaan Yang Valid'
            }
        }

        const res = await prisma.magang.create({
            data:{
                name:data.name,
                deskripsi : data.deskripsi || '',
                jurusan : data.jurusan,
                keahlian : data.keahlian,
                perusahaanId : data.perusahaanId

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

async function UploadLowongan(data:Datas):Promise<UploadResponse> {
    if (!data.name || !data.jurusan || !data.keahlian || !data.perusahaanId) {
        return {
            status: 400,
            message: 'Data Yang Diperlukan Tidak Ditemukan'
        }
    }
    try{
        const existing = await prisma.perusahaan.findFirst({where:{
            id:data.perusahaanId,
        }})

        if (!existing) {
            return {
                status: 409,
                message: `Tidak Ada Perusahaan Yang Valid ${data.perusahaanId}`
            }
        }

        const res = await prisma.lowongan.create({
            data:{
                name:data.name,
                deskripsi : data.deskripsi || '',
                jurusan : data.jurusan,
                keahlian : data.keahlian,
                perusahaanId : data.perusahaanId

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
            return  UploadLowongan(Datas)
        case 'magang':
            return UploadMagang(Datas)
        case 'perusahaan':
            return UploadPerusahaan(Datas)
        default:
            return {status:400, message:'Tidak Ada Logic'}
    }
}

