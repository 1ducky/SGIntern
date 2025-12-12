import { CorousselComponent } from "@/component/Coroussel"

import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"
import { ListCardComponents } from "@/component/card/ListCard"

import { HScrollCard } from "@/component/card/HScrollCard"
import { HScrollCardSkeleton } from "@/component/Skeleton/HScrollCardSkeleton"
import { Suspense } from "react"


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

  const MagangRes =[
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
  ]
  const Magang1Res =[
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
  ]


  return (
    <>
      <CorousselComponent Information={InformationRes}/>
      <div className="bg-blue-100">
        <h2 className="text-2xl">Daftar Magang</h2>
        <Suspense fallback={<ListCardSkeleton Total={MagangRes.length}/>}>
          <ListCardComponents MagangList={MagangRes} Path='magang'/>
        </Suspense>
      </div>

      <div className="bg-blue-100">
        <h2 className="text-2xl">Daftar PartnerShip Perusahaan</h2>
        <Suspense fallback={<HScrollCardSkeleton Total={Magang1Res.length}/>}>
          <HScrollCard MagangList={Magang1Res} Path="perusahaan"/>
        </Suspense>
      </div>
      <div className="bg-blue-100">
        <h2 className="text-2xl">Daftar Lowongan Pekerjaan</h2>
        <Suspense fallback={<HScrollCardSkeleton Total={Magang1Res.length}/>}>
          <HScrollCard MagangList={Magang1Res} Path="lowongan"/>
        </Suspense>
      </div>
      
      <div className="bg-blue-100">
        <h2 className="text-2xl">Daftar Magang</h2>
        <Suspense fallback={<ListCardSkeleton Total={MagangRes.length}/>}>
          <ListCardComponents MagangList={MagangRes} Path="magang"/>
        </Suspense>
      </div>
      <div className="w-full"></div>

      {/* Search */}
      <div className="my-10 flex flex-col justify-center items-center gap-5">
        <h2 className="text-sm md:text-2xl lg:text-4xl text-center text-wrap w-[45%]">Cari Tempat Magang ataupun Lowongan Pekerjaan</h2>
        <div className="bg-blue-400  mx-10 w-[50%]  h-14 overflow-hidden rounded-full flex flex-row items-center justify-start">
              <div className="w-10 h-10 flex justify-center items-center">
                  <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              
              <input type="text" className=" p-1 px-2 w-full h-full rounded-full focus:outline-0 focus:ring-0 border-0 "/>
          </div>
      </div>

      <div className="my-20"></div>

      {/* Footer */}
      
    </>
    
  )
}