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
          <ListCardComponents DataList={MagangRes} Path='magang'/>
        </Suspense>
      </div>

      <div className="bg-blue-100">
        <h2 className="text-2xl">Daftar PartnerShip Perusahaan</h2>
        <Suspense fallback={<HScrollCardSkeleton Total={Magang1Res.length}/>}>
          <HScrollCard DataList={Magang1Res} Path="perusahaan"/>
        </Suspense>
      </div>
      <div className="bg-blue-100">
        <h2 className="text-2xl">Daftar Lowongan Pekerjaan</h2>
        <Suspense fallback={<HScrollCardSkeleton Total={Magang1Res.length}/>}>
          <HScrollCard DataList={Magang1Res} Path="lowongan"/>
        </Suspense>
      </div>
      
      <div className="bg-blue-100">
        <h2 className="text-2xl">Daftar Magang</h2>
        <Suspense fallback={<ListCardSkeleton Total={MagangRes.length}/>}>
          <ListCardComponents DataList={MagangRes} Path="magang"/>
        </Suspense>
      </div>
      <div className="w-full"></div>

      {/* Search */}

      {/* Footer */}
      
    </>
    
  )
}