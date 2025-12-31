import Image from "next/image"

import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"
import { ListCardComponents } from "@/component/card/ListCard"

import { Suspense } from "react"

// import { getRandomItem } from "@/utils/getRandomIndex"
// import { jurusanText } from "@/StatisData/StatisObj"
import { ListCardComponents2 } from "@/component/card/CardList2"



export default async function Home() {

  // const InformationRes = [
  //   {
  //     title: 'information',
  //     description: 'description',
  //     image:'/banner/b7.webp'
  //   },
  //   {
  //     title: 'information',
  //     description: 'description',
  //     image:'/banner/b2.webp'
  //   },
  //   {
  //     title: 'information',
  //     description: 'description',
  //     image:'/banner/b3.webp'
  //   },
  // ]


  return (
    <>
      <Image
  src="/banner/b4.webp"
  alt="Banner"
  width={1920}
  height={600}
  className="w-full h-auto"
  priority={true}
  decoding="async"
/>
      <div className=" md:px-20 sm:px-10 px-5 mt-10">
        <h2 className="text-2xl">Daftar Magang</h2>
        <Suspense fallback={<ListCardSkeleton Total={6}/>}>
          <MagangDisplay/>
        </Suspense>
      </div>

      <div className="bg-white md:px-20 sm:px-10 px-5 mt-10 py-10">
        <h2 className="text-2xl">Daftar Mitra Dudika</h2>
        <Suspense fallback={<ListCardSkeleton Total={10}/>}>
          <PerusahaanDisplay/>
        </Suspense>
      </div>
      <div className=" md:px-20 sm:px-10 px-5 mt-10">
        <h2 className="text-2xl">Daftar Lowongan Pekerjaan</h2>
        <Suspense fallback={<ListCardSkeleton Total={10}/>}>
          <LowonganDisplay/>
        </Suspense>
      </div>
      {/* <div className="bg-white md:px-20 sm:px-10 px-5 mt-10 py-10">
        <h2 className="text-2xl">Daftar Magang Jurusan Acak</h2>
        <Suspense fallback={<ListCardSkeleton Total={10}/>}>
          <RandomMagangDisplay/>
        </Suspense>
      </div> */}
      
      <div className="w-full"></div>

      {/* Footer */}

     
      
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
// async function RandomMagangDisplay() {

    
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
//     // const Random = getRandomItem(jurusanText)

//     const res = await fetch(`${baseUrl}/api/list/magang?order[createAt]=desc&order[jurusan]=TMI`, {
//         next:{revalidate:60}
//     })

//     const {data} = await res.json()
    

//     return(
//       <>
//         <ListCardComponents2 DataList={data} Path='magang'/>
//       </>
//     )
// }