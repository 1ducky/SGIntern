import { CorousselComponent } from "@/component/Coroussel"

import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"
import { ListCardComponents } from "@/component/card/ListCard"

import { HScrollCard } from "@/component/card/HScrollCard"
import { HScrollCardSkeleton } from "@/component/Skeleton/HScrollCardSkeleton"
import { Suspense } from "react"
import prisma from "@/lib/db"


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
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
  ]
  const Magang1Res =[
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
    {
      name :'Magang',
      imageUrl : 'url',
      perusahaan : 'perusahaan',
      alamat : 'alamt'
    },
  ]

  const perusahaan = await prisma.perusahaan.findMany({select:{name:true,alamat:true,deskripsi:true}})
  // const res = await fetch('http://localhost:3000/api/user', {
  // })

  // const data = await res.json()
  // console.log(data)


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
        <h2 className="text-2xl">Daftar PartnerShip perusahaan</h2>
        <Suspense fallback={<HScrollCardSkeleton Total={Magang1Res.length}/>}>
          <HScrollCard DataList={perusahaan} Path="perusahaan"/>
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

      {/* Footer */}

      <div className="w-full bg-sky-800 py-20 px-10 inset-shadow-sm mt-10 flex flex-row flex-wrap justify-around items-center">
        <div className="">left</div>
        <div className="">right</div>
      </div>
      
    </>
    
  )
}