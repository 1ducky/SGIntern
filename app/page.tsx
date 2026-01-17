

import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"


import { Suspense } from "react"

import { Section } from "@/component/homePage/section"
import { MagangFeature } from "@/component/homePage/magangFeature"
import { JobFeature } from "@/component/homePage/jobFeature"
import { CompanyFeature } from "@/component/homePage/companyFeature"



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
    <div className="min-h-screen bg-gray-50">
      <Section/>
      <Suspense fallback={<ListCardSkeleton Total={6}/>}>
        <MagangDisplay/>
      </Suspense>


      <Suspense fallback={<ListCardSkeleton Total={10}/>}>
        <PerusahaanDisplay/>
      </Suspense>

  
      <Suspense fallback={<ListCardSkeleton Total={10}/>}>
        <LowonganDisplay/>
      </Suspense>
    </div>
    
  )
}

async function MagangDisplay() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/magang?order[createAt]=asc&limit=6`, {
    next:{revalidate:60}
  })

  const {data} = await res.json()
  

  return(
    <>
      <MagangFeature magangs={data} />
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
      <CompanyFeature companies={data}/>
    </>
  )
}
async function LowonganDisplay() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/lowongan?order[createAt]=desc&limit=6`, {
      next:{revalidate:60}
  })

  const {data} = await res.json()
  

  return(
    <>
      <JobFeature jobs={data}/>
    </>
  )
}
