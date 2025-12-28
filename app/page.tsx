import { CorousselComponent } from "@/component/Coroussel"

import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"
import { ListCardComponents } from "@/component/card/ListCard"

import { Suspense } from "react"

import Link from "next/link"
import { getRandomItem } from "@/utils/getRandomIndex"
import { jurusanText } from "@/StatisData/StatisObj"
import { ListCardComponents2 } from "@/component/card/CardList2"



export default async function Home() {

  const InformationRes = [
    {
      title: 'information',
      description: 'description',
      image:'url'
    },
    {
      title: 'information',
      description: 'description',
      image:'url'
    },
    {
      title: 'information',
      description: 'description',
      image:'url'
    },
  ]


  return (
    <>
      <CorousselComponent Information={InformationRes}/>
      <div className="bg-blue-100 md:px-20 sm:px-10 px-5 mt-10">
        <h2 className="text-2xl">Daftar Magang</h2>
        <Suspense fallback={<ListCardSkeleton Total={6}/>}>
          <MagangDisplay/>
        </Suspense>
      </div>

      <div className="bg-white md:px-20 sm:px-10 px-5 mt-10 py-10">
        <h2 className="text-2xl">Daftar PartnerShip perusahaan</h2>
        <Suspense fallback={<ListCardSkeleton Total={10}/>}>
          <PerusahaanDisplay/>
        </Suspense>
      </div>
      <div className="bg-blue-100 md:px-20 sm:px-10 px-5 mt-10">
        <h2 className="text-2xl">Daftar Lowongan Pekerjaan</h2>
        <Suspense fallback={<ListCardSkeleton Total={10}/>}>
          <LowonganDisplay/>
        </Suspense>
      </div>
      <div className="bg-white md:px-20 sm:px-10 px-5 mt-10 py-10">
        <h2 className="text-2xl">Daftar Magang Jurusan Acak</h2>
        <Suspense fallback={<ListCardSkeleton Total={10}/>}>
          <RandomMagangDisplay/>
        </Suspense>
      </div>
      
      <div className="w-full"></div>

      {/* Footer */}

      <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">S</div>
              <h2 className="text-xl font-bold tracking-tight">BKK SMK <span className="text-blue-400">Sunan Giri Menganti</span></h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Platform digital resmi untuk memfasilitasi siswa dan alumni dalam meraih peluang karir di industri impian. Jembatan masa depan menuju kemandirian profesional.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Layanan Siswa</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="/kategori/magang" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Informasi Magang (Prakerin)
                </Link>
              </li>
              <li>
                <Link href="kategori/lowongan" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Lowongan Kerja Alumni
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Interview & CV
                </Link>
              </li>
              <li>
                <a href="mailto:bkk@smksunangirimenganti.sch.id" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Konsultasi Karir
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Daftar Kemitraan</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <p  className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Perusahaan
                </p>
              </li>
              <li>
                <p  className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Perusahaan
                </p>
              </li>
              <li>
                <p  className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Perusahaan
                </p>
              </li>
              <li>
                <p  className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Perusahaan
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Kontak Kami</h3>
            <div className="text-slate-400 text-sm space-y-4">
              <p className="flex items-start">
                <span className="mr-3 text-blue-400">📍</span>
                Jl. Raya Menganti, Gresik, Jawa Timur
              </p>
              <p className="flex items-center">
                <span className="mr-3 text-blue-400">📞</span>
                +62 812 3456 7890
              </p>
              <p className="flex items-center">
                <span className="mr-3 text-blue-400">✉️</span>
                bkk@smksunangirimenganti.sch.id
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© 2024 BKK SMK Sunan Giri Menganti. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
      
    </>
    
  )
}

async function MagangDisplay() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/magang?order[createAt]=asc`, {
    next:{revalidate:60}
  })

  const {data} = await res.json()
  

  return(
    <>
      <ListCardComponents DataList={data} Path='magang'/>
    </>
  )
}
async function PerusahaanDisplay() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/perusahaan?order[createAt]=desc`, {
      next:{revalidate:60}
  })

  const {data} = await res.json()
  

  return(
    <>
      <ListCardComponents2 DataList={data} Path='perusahaan'/>
    </>
  )
}
async function LowonganDisplay() {

  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/lowongan?order[createAt]=desc`, {
      next:{revalidate:60}
  })

  const {data} = await res.json()
  

  return(
    <>
      <ListCardComponents2 DataList={data} Path='lowongan'/>
    </>
  )
}
async function RandomMagangDisplay() {

    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    // const Random = getRandomItem(jurusanText)

    const res = await fetch(`${baseUrl}/api/list/magang?order[createAt]=desc&order[jurusan]=TMI`, {
        next:{revalidate:60}
    })

    const {data} = await res.json()
    

    return(
      <>
        <ListCardComponents2 DataList={data} Path='magang'/>
      </>
    )
}