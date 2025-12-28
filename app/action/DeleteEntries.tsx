'use server'

import prisma from "@/lib/db";
import { deleteImage } from "./DeleteImage";

const FORM_TYPES = ["magang", "lowongan", "perusahaan"] as const;
type FormType = typeof FORM_TYPES[number] | undefined;

type UpdateResponse = {
    status: number
    message?: string | undefined
    data?: unknown
}

async function DeletePerusahaan(id: string , Key? : string | null):Promise<UpdateResponse> {
    if (!Key || !id) {
        return {
            status: 400,
            message: 'Data Yang Diperlukan Tidak Ditemukan'
        }
    }
    try{
        const res = await prisma.perusahaan.delete({
            where:{ id },
        })
        if(!res){
            return {status: 409, message:'Gagal Gagal Menghapus'}
        }
        await deleteImage(Key)
        return {status : 200, message:'Berhasil Berhasil Menghapus'}
    }catch{
        return {status:400, message: 'Error Internal'}
    }
}
async function DeleteLowongan(id: string ):Promise<UpdateResponse> {
    if (!id) {
        return {
            status: 400,
            message: 'Data Yang Diperlukan Tidak Ditemukan'
        }
    }
    try{


        const res = await prisma.lowongan.delete({
            where:{ id },
        })
        if(!res){
            return {status: 409, message:'Gagal Gagal Menghapus'}
        }
        return {status : 200, message:'Berhasil Berhasil Menghapus'}
    }catch{
        return {status:400, message: 'Error Internal'}
    }
}

async function DeleteMagang(id: string ):Promise<UpdateResponse> {
    if (!id) {
        return {
            status: 400,
            message: 'Data Yang Diperlukan Tidak Ditemukan'
        }
    }
    try{


        const res = await prisma.magang.delete({
            where:{ id },
        })
        if(!res){
            return {status: 409, message:'Gagal Gagal Menghapus'}
        }
        return {status : 200, message:'Berhasil Berhasil Menghapus'}
    }catch{
        return {status:400, message: 'Error Internal'}
    }
}


export default async function DeleteEntries(Id: string | null, Type: FormType, Key?: string | null):Promise<UpdateResponse>{

    if( !Id  ) return {status:400, message:'Kesalahan Request'}

    switch (Type){
        case 'lowongan':
            return  DeleteLowongan(Id)
        case 'magang':
            return DeleteMagang(Id)
        case 'perusahaan':
            return DeletePerusahaan(Id,Key ? Key : null)
        default:
            return {status:400, message:'Tidak Ada Logic'}
    }
}