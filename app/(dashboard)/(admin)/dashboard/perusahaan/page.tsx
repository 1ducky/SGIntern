
import DashboardList from "@/component/DashboardList"
import prisma from "@/lib/db"
import Link from "next/link"

type PerusahaanRow = {
  id: string
  name: string
  alamat: string
}

type Column<T> = {
  key: keyof T
  label: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export default async function DashboardPerusahaan ({searchParams} : {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
    const query = await searchParams
    const order = query.order === 'desc' || query.order === 'asc' ? query.order : 'asc'
    const res = await prisma.perusahaan.findMany({
        select:{
            id:true,
            name:true,
            alamat:true
        },orderBy:{createAt:order}
    })

    const perusahaanColumns: Column<PerusahaanRow>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nama' },
    { key: 'alamat', label: 'Alamat' }
    ]
    return(
        <div className="w-full bg-white md:rounded-tr-2xl p-5 rounded-b-2xl flex flex-col flex-wrap gap-5">
            <h2 className="text-4xl font-medium">Dashboard Perusahaan</h2>
            <div className="px-5 py-3 rounded-2xl flex flex-row gap-5">
                <Link href={'/dashboard/upload/perusahaan'} prefetch={false} className="px-3 py-1 bg-blue-100 rounded-2xl">Tambahkan</Link>
                <Link href={`/dashboard/perusahaan?order=${ order == 'asc' ? 'desc': 'asc'}`} className="px-3 py-1 bg-blue-100 rounded-2xl">Urutkan</Link>
                <div className="bg-blue-100 overflow-hidden rounded-full flex flex-row items-center justify-center">
                    <div className="w-10 h-10 flex justify-center items-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    
                    <input type="text" placeholder="Cari..."  className=" p-1 px-2 w-sm rounded-full focus:outline-0 focus:ring-0 border-0  md:block hidden"/>
                </div>
            </div>
            {res ? (
                <DashboardList Head={perusahaanColumns} Items={res} Path="perusahaan"/>
            ): (
                <h2>Belum Ada Data</h2>
            )}
            
        </div>
    )
}