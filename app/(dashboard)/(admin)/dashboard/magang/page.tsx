
import DashboardList from "@/component/DashboardList"
import prisma from "@/lib/db"
import Link from "next/link"

type MagangRow = {
    id: string
    name: string
    jurusan: string
    keahlian: string
    perusahaan: {
        name:string
        alamat:string
    }
}

type Column<T> = {
  key: keyof T
  label: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export default async function DashboardMagang ({searchParams} : {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
    const query = await searchParams
    const order = query.order === 'desc' || query.order === 'asc' ? query.order : 'asc'
    const magang = await prisma.magang.findMany({
        select:{
            id:true,
            name:true,
            jurusan:true,
            keahlian:true,
            perusahaan:{
                select:{
                    name:true,
                    alamat:true
                }
            }
            
        },orderBy:{createAt:order},
        
    })

    const MagangColumns: Column<MagangRow>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Magang' },
    { key: 'jurusan', label: 'Jurusan' },
    { key: 'keahlian', label: 'Keahlihan' },
    { key: 'perusahaan', label: 'Perusahaan',
        render: (_,row) => row.perusahaan.name
    },
    {
    key: 'perusahaan',
    label: 'Alamat',
    render: (_, row) => row.perusahaan.alamat
    }
    ]

    
    return(
        <div className="w-full bg-white md:rounded-tr-2xl p-5 rounded-b-2xl flex flex-col gap-5">
            <h2 className="text-4xl font-medium">Dashboard Magang</h2>
            <div className="px-5 py-3 rounded-2xl flex flex-row gap-5">
                <Link href={'/dashboard/upload/magang'} prefetch={false} className="px-3 py-1 bg-blue-100 rounded-2xl">Tambahkan</Link>
                <button className="px-3 py-1 bg-blue-100 rounded-2xl">Urutkan</button>
                <div className="bg-blue-100 overflow-hidden rounded-full flex flex-row items-center justify-center">
                    <div className="w-10 h-10 flex justify-center items-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    
                    <input type="text" placeholder="Cari..."  className=" p-1 px-2 w-sm rounded-full focus:outline-0 focus:ring-0 border-0  md:block hidden"/>
                </div>
            </div>
            <DashboardList Head={MagangColumns} Items={magang} Path="magang"/>
        </div>
    )
}