import { ListCardComponents2 } from "@/component/card/CardList2";

import FilterQuery from "@/component/csr/FilterQuery";
import KeywordQuery from "@/component/csr/KeywordQuery";
import { Pagination } from "@/component/csr/Pagination";

import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton";
import { jurusanText } from "@/StatisData/StatisObj";

import { Suspense } from "react";




type Props = {
  params: {
    slug: string
  },
  searchParams : {
    jurusan? : string
    q? : string
    page? : string 
    
  }
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const StaticParams =['lowongan','magang','perusahaan']
    return StaticParams.map( slug => ({slug : slug.toLowerCase()}))
}


export async function generateMetadata( {params} : Props ){
    const {slug} = await params
    const clean = slug.toLowerCase()


    
    return {
        title: `${clean.replace(/-/g,' ')}`,
        description:`Cari Berbagai ${clean} di SGIntern` ,
        openGraph:{
            title: `${clean.replace(/-/g,' ')}`,
            description:`Cari Berbagai ${clean} di SGIntern` ,
            url: "https://sgintern.com",
            type:"website"
        }
    }
}


export default async function KategoriPage ( {params,searchParams} : Props ) {
  const {slug} = await params
  const clean = slug.toLowerCase()
  const query = (await searchParams)?.q || ''
  const jurusan = (await searchParams)?.jurusan || ''
  const Page = Number((await searchParams)?.page || 1)  
  const Limit=9
  const Offset= Limit * Math.max(Page-1,0)

  return (
      <>
        <div className="bg-white md:px-20 px-10 mt-10 py-2">
          <h2 className="text-2xl capitalize font-medium">Daftar {slug}</h2>
          
          <FilterComponent query={query} jurusan={jurusan} TypeQuery={clean}/>
        </div>
        <div className=" md:px-20 px-10 mt-10 ">
          

          <Suspense fallback={<ListCardSkeleton Total={10}/>}>
            <QueryDisplay limit={Limit} offset={Offset} endpoint={clean} query={query} jurusan={jurusan} page={Page}/>
          </Suspense>
        </div>
      </>
      

  )
}


async function QueryDisplay({limit,offset,query,endpoint,jurusan,page}:{limit:number,offset:number,query?:string,endpoint:string,jurusan? : string,page:number}) {
  console.log(limit,offset,query,endpoint,jurusan )
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${baseUrl}/api/list/${endpoint}?order[createAt]=desc&limit=${limit}&offset=${offset}${query ? `&query=${query}` : ''}${jurusan ? `&order[jurusan]=${jurusan}` : ''}`, {
      next:{revalidate:60}
  })

  const {data,total} = await res.json()
  const TotalPage = Math.ceil(total/limit)

  return(
    <>
      <h2 className="capitalize my-5 text-lg font-semibold">Ditemukan {total} {endpoint} </h2>
      <ListCardComponents2 DataList={data} Path={endpoint}/>
      <Pagination Page={page} Total={TotalPage}/>
    </>
  )
}

async function FilterComponent({query,TypeQuery} : {query? : string,jurusan?:string, TypeQuery:string}) {

  return (
    <>
      <div className="py-1 flex flex-row justify-start gap-2 my-5">
          {TypeQuery !== 'perusahaan' && <FilterQuery jurusanText={jurusanText} defaultfilter={query}/>}
          <KeywordQuery defaultQuery={query}/>
      </div>
    </>
  )
}