import { ListCardComponents2 } from "@/component/card/CardList2"
import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"

import Link from "next/link"
import { Suspense } from "react"


export default function DetailPage () {
    return (
        <div className="basis-full py-5 pb-0">
            <div className="flex justify-center p-6">

                <div className="max-w-5xl w-full flex flex-col items-center gap-10">
                    <h2 className="font-medium text-2xl">Kategori</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        
                        <Link prefetch={false} href={'/kategori/magang'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center">
                            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500 transition-colors">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Magang</h3>
                            <p className="text-gray-500 text-sm mb-4 capitalize">Temukan pengalaman kerja pertama untuk siswa <span className="uppercase">SMK</span></p>
                            <span className="text-xs font-semibold bg-sky-100 text-sky-700 py-1 px-3 rounded-full">150+ Posisi</span>
                        </Link>

                        <Link prefetch={false} href={'/kategori/lowongan'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center border-t-4 border-orange-400">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Lowongan</h3>
                            <p className="text-gray-500 text-sm mb-4 capitalize">Peluang kerja full-time dan part-time untuk profesional.</p>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-700 py-1 px-3 rounded-full">800+ Aktif</span>
                        </Link>

                        <Link prefetch={false} href={'/kategori/perusahaan'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500 transition-colors">
                                <i className="fa-solid fa-building"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Mitra</h3>
                            <p className="text-gray-500 text-sm mb-4 capitalize">Jelajahi Profil Perusahaan yang Bermitra Dengan <span className="uppercase">SMK</span>  Sunan Giri Menganti</p>
                            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full">45 Mitra</span>
                        </Link>

                    </div>

                    
                </div>

                
            </div>
            <div className="bg-white md:px-20 sm:px-10 px-5 mt-10 py-10">
              <h2 className="text-2xl">Daftar Perusahaan</h2>
              <Suspense fallback={<ListCardSkeleton Total={10}/>}>
                <PerusahaanDisplay/>
              </Suspense>
            </div>
            <div className=" md:px-20 sm:px-10 px-5 mt-10 ">
              <h2 className="text-2xl">Daftar Magang</h2>
              <Suspense fallback={<ListCardSkeleton Total={10}/>}>
                <MagangDisplay/>
              </Suspense>
            </div>
        </div>
    )
}

async function MagangDisplay() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/magang?order[createAt]=desc&limit=6`, {
      next:{revalidate:60}
  })

  const {data} = await res.json()
  

  return(
    <>
      <ListCardComponents2 DataList={data} Path='magang'/>
    </>
  )
}

async function PerusahaanDisplay() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/perusahaan?order[createAt]=desc&limit=6`, {
      next:{revalidate:60}
  })

  const {data} = await res.json()
  

  return(
    <>
      <ListCardComponents2 DataList={data} Path='perusahaan'/>
    </>
  )
}