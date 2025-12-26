import { HScrollCard } from "@/component/card/HScrollCard"
import { HScrollCardSkeleton } from "@/component/Skeleton/HScrollCardSkeleton"
import { cacheLife } from "next/cache"
import Link from "next/link"
import { Suspense } from "react"


export default function DetailPage () {
    return (
        <div className="basis-full p-5">
            <div className="flex justify-center p-6">

                <div className="max-w-5xl w-full flex flex-col items-center gap-10">
                    <h2 className="font-medium text-2xl">Kategori</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        
                        <Link prefetch={false} href={'/kategori/magang'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center">
                            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500 transition-colors">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Magang</h3>
                            <p className="text-gray-500 text-sm mb-4">Temukan pengalaman kerja pertama untuk siswa & mahasiswa.</p>
                            <span className="text-xs font-semibold bg-sky-100 text-sky-700 py-1 px-3 rounded-full">150+ Posisi</span>
                        </Link>

                        <Link prefetch={false} href={'/kategori/lowongan'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center border-t-4 border-orange-400">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Lowongan</h3>
                            <p className="text-gray-500 text-sm mb-4">Peluang kerja full-time dan part-time untuk profesional.</p>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-700 py-1 px-3 rounded-full">800+ Aktif</span>
                        </Link>

                        <Link prefetch={false} href={'/kategori/perusahaan'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500 transition-colors">
                                <i className="fa-solid fa-building"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">PartnerShips</h3>
                            <p className="text-gray-500 text-sm mb-4">Jelajahi profil perusahaan impian dan budaya kerjanya.</p>
                            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full">45 Mitra</span>
                        </Link>

                    </div>

                    
                </div>

                
            </div>
            <h2 className="text-2xl">Daftar Magang</h2>
            <Suspense fallback={<HScrollCardSkeleton Total={6}/>}>
                <MagangDisplay/>
            </Suspense>
            <h2 className="text-2xl">Daftar perusahaan</h2>
            <Suspense fallback={<HScrollCardSkeleton Total={6}/>}>
                <PerusahaanDisplay/>
            </Suspense>

        </div>
    )
}

async function MagangDisplay() {
  'use cache'
  cacheLife('minutes')
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/magang?order[createAt]=desc`, {
      next:{revalidate:60}
  })

  const data = await res.json()
  console.log(data)
  

  return(
    <>
      <HScrollCard DataList={data} Path='magang'/>
    </>
  )
}

async function PerusahaanDisplay() {
  'use cache'
  cacheLife('minutes')
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/perusahaan?order[createAt]=desc`, {
      next:{revalidate:60}
  })

  const data = await res.json()
  

  return(
    <>
      <HScrollCard DataList={data} Path='perusahaan'/>
    </>
  )
}