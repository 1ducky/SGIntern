'use client'
import DashboardList from "@/component/DashboardList"
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

export default function DashboardLowongan () {
    const res=[
        {
            id:'id',
            name:'name',
            jurusan:'jurusan',
            keahlian:'keahlian',
            perusahaan:{
                name:'name',
                alamat:'alamat'
            }
        },
        {   
            id:'id',
            name:'name',
            jurusan:'jurusan',
            keahlian:'keahlian',
            perusahaan:{
                name:'name',
                alamat:'alamat'
            }
        },
    ]

    const LowonganColumns: Column<LowonganRow>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Lowongan' },
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
            <h2 className="text-4xl font-medium">Dashboard Lowongan</h2>
            <div className="px-5 py-3 rounded-2xl flex flex-row gap-5">
                <Link href={'/dashboard/upload/lowongan'} prefetch={false} className="px-3 py-1 bg-blue-100 rounded-2xl">Tambahkan</Link>
                <button className="px-3 py-1 bg-blue-100 rounded-2xl">Urutkan</button>
                <div className="bg-blue-100 overflow-hidden rounded-full flex flex-row items-center justify-center">
                    <div className="w-10 h-10 flex justify-center items-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    
                    <input type="text" placeholder="Cari..."  className=" p-1 px-2 w-sm rounded-full focus:outline-0 focus:ring-0 border-0  md:block hidden"/>
                </div>
            </div>
            <DashboardList Head={LowonganColumns} Items={res} Path="magang"/>
        </div>
    )
}