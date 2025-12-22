import prisma from "@/lib/db"
import ContextProvider from "@/utils/ContextProvider"
import { notFound } from "next/navigation"

interface LayoutProps {
  children: React.ReactNode
  params: {
    slug: string
    id: string
  }
}

type DB = {
        id? : string | null,
        email? : string | null,
        name? : string | null,
        jurusan? : string | null,
        keahlian? : string | null,
        kelamin? : string | null,
        pendidikan? : string | null,
        kelas? : string | null,
        link? : string | null,
        role? : string | null,
        alamat? : string | null,
        imageUrl? : string | null
        deskripsi? : string | null
        perusahaanId? : string | null

    } | null

const SLUG = ["magang", "lowongan", "perusahaan"] as const;
type SlugType = typeof SLUG[number];

function isSLugType(value: unknown): value is SlugType {
  return SLUG.includes(value as SlugType);
}

async function GetPerusahaan(id:string) {
    try{
        const res = await prisma.perusahaan.findFirst({where:{id},select:{alamat:true,name:true,deskripsi:true}})
        return res
    }catch{
        return null
    }
}
async function GetMagang(id:string) {
    try{
        const res = await prisma.magang.findFirst({where:{id},select:{name:true,deskipsi:true,jurusan:true,keahlian:true,perusahaanId:true}})
        return res
    }catch{
        return null
    }
}
async function GetLowongan(id:string) {
    try{
        const res = await prisma.magang.findFirst({where:{id},select:{name:true,deskipsi:true,jurusan:true,keahlian:true,perusahaanId:true}})
        return res
    }catch{
        return null
    }
}

const actionMap: Record<SlugType,(id: string) => Promise<DB>> = {
    perusahaan: GetPerusahaan,
    magang: GetMagang,
    lowongan: GetLowongan,
}

export async function generateStaticParams() {
    const StaticParams =['magang','lowongan','perusahaan']
    return StaticParams.map( slug => ({slug : slug.toLowerCase()}))
}

export default async function UploadLayout({params,children} : LayoutProps) {
    const {slug,id} = await params

    if(!id || !isSLugType(slug)){
        return notFound()
    }
    const db = await actionMap[slug](id)
    if (!db) return notFound()

    const value = {temp2 : {data1:slug,data2:id}, db}

    return(
        <>
            <div className="bg-white p-10">
                <h2 className="capitalize text-2xl">
                    Perbarui Data {slug}
                    <div className="flex flex-row flex-wrap">
                        <ContextProvider value={value}>
                            {children}
                        </ContextProvider>
                        
                    </div>
                    
                </h2>
                
            </div>
        </>
    )
}
