
import KeywordQuery from "@/component/csr/KeywordQuery"
import DashboardList from "@/component/DashboardList"
import prisma from "@/lib/db"
import Link from "next/link"

type LowonganRow = {
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

export default  async function DashboardLowongan ({searchParams} : {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {

    const query = await searchParams
    const order = query.order === 'desc' || query.order === 'asc' ? query.order : 'asc'
    const Search = typeof query.q === 'string'
                    ? query.q
                    : ''
    const lowongan = await prisma.lowongan.findMany({
        where:{name:{contains:Search,mode:'insensitive'}},
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
        take:20
        
    })


    const LowonganColumns: Column<LowonganRow>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Lowongan' },
    { key: 'jurusan', label: 'Jurusan' },
    { key: 'keahlian', label: 'Keahlihan' },
    { key: 'perusahaan', label: 'Perusahaan',
        // Anakan Perusahaan
        render: (_,row) => row.perusahaan.name
    },
    {
    key: 'perusahaan',
    label: 'Alamat',
    render: (_, row) => row.perusahaan.alamat
    }
    ]

    
    return(
        <div className="w-full min-h-[360px] bg-white md:rounded-tr-2xl p-5 rounded-b-2xl flex flex-col gap-5">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-slate-500 text-sm">Monitoring Data Lowongan</p>
            </div>
            <div className="px-5 py-3 rounded-2xl flex flex-row gap-5">
                <Link href={'/dashboard/upload/lowongan'} prefetch={false} className="px-3 py-1 bg-blue-100 rounded-2xl">Tambahkan</Link>
                <Link href={`/dashboard/lowongan?order=${ order == 'asc' ? 'desc': 'asc'}`} className="px-3 py-1 bg-blue-100 rounded-2xl">Urutkan</Link>
                <KeywordQuery defaultQuery={Search}/>
            </div>
            <DashboardList Head={LowonganColumns} Items={lowongan} Path="lowongan"/>
        </div>
    )
}