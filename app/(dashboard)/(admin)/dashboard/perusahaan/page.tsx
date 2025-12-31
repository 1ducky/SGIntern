
import KeywordQuery from "@/component/csr/KeywordQuery"
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
    const Search = typeof query.q === 'string'
                    ? query.q
                    : ''
    const res = await prisma.perusahaan.findMany({
        where:{name: {contains:Search,mode:"insensitive"}},
        select:{
            id:true,
            name:true,
            alamat:true
        },orderBy:{createAt:order},
        take:20
    })

    const perusahaanColumns: Column<PerusahaanRow>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nama' },
    { key: 'alamat', label: 'Alamat' }
    ]
    return(
        <div className="w-full min-h-[360px] bg-white md:rounded-tr-2xl p-5 rounded-b-2xl flex flex-col flex-wrap gap-5">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-slate-500 text-sm">Monitoring Data Lowongan</p>
            </div>
            <div className="px-5 py-3 rounded-2xl flex flex-row gap-5">
                <Link href={'/dashboard/upload/perusahaan'} prefetch={false} className="px-3 py-1 bg-blue-100 rounded-2xl">Tambahkan</Link>
                <Link href={`/dashboard/perusahaan?order=${ order == 'asc' ? 'desc': 'asc'}`} className="px-3 py-1 bg-blue-100 rounded-2xl">Urutkan</Link>
                <KeywordQuery defaultQuery={Search} />
            </div>
            {res ? (
                <DashboardList Head={perusahaanColumns} Items={res} Path="perusahaan"/>
            ): (
                <h2>Belum Ada Data</h2>
            )}
            
        </div>
    )
}