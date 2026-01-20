import { GetApiResponse, LowonganRow, MagangRow, PerusahaanRow } from "@/lib/types/apitypes"

import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"

import { Suspense, use } from "react"

// Feature Component
import { Section } from "@/component/homePage/section"
import { MagangFeature } from "@/component/homePage/magangFeature"
import { JobFeature } from "@/component/homePage/jobFeature"
import { CompanyFeature } from "@/component/homePage/companyFeature"

// useCase
import getMagangHomePage from "@/lib/data/homepage/getMagang"
import getLowonganHomePage from "@/lib/data/homepage/getLowongan"
import getPerusahaanHomePage from "@/lib/data/homepage/getPerusahaan"




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

  // Initialize Request
  const MagangList = getMagangHomePage()
  const LowonganList = getLowonganHomePage()
  const PerusahaanList = getPerusahaanHomePage()

  return (
    <div className="min-h-screen bg-gray-50">
      <Section/>
      <Suspense fallback={<ListCardSkeleton Total={6}/>}>
        <MagangDisplay promise={MagangList}/>
      </Suspense>


      <Suspense fallback={<ListCardSkeleton Total={10}/>}>
        <PerusahaanDisplay promise={PerusahaanList}/>
      </Suspense>

  
      <Suspense fallback={<ListCardSkeleton Total={10}/>}>
        <LowonganDisplay promise={LowonganList}/>
      </Suspense>
    </div>
    
  )
}

 function MagangDisplay({promise} : {promise : Promise<GetApiResponse<MagangRow[]>>}) {

  const { data } = use(promise)
  

  return(
    <>
      <MagangFeature magangs={data} />
    </>
  )
}
function PerusahaanDisplay({promise} : {promise : Promise<GetApiResponse<PerusahaanRow[]>>}) {

  const {data} = use(promise)
  

  return(
    <>
      <CompanyFeature companies={data}/>
    </>
  )
}
function LowonganDisplay({promise} : {promise : Promise<GetApiResponse<LowonganRow[]>>}) {

  const {data} = use(promise)
  

  return(
    <>
      <JobFeature jobs={data}/>
    </>
  )
}
