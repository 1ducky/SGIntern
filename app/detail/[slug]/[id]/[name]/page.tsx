import { ListCardComponents2 } from "@/component/card/CardList2"
import { ListCardSkeleton } from "@/component/Skeleton/ListCardSkeleton"
import { isPerusahaanObject } from "@/utils/isPerusahaanObj"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

type res ={
    name: string,
    keahlian? : string,
    jurusan? : string,
    id : string
    deskripsi : string,
    perusahaan? : {
        name : string
        id: string,
        alamat: string
        imageUrl:string
        deskripsi:string
    },
    alamat? :string,
    imageUrl? :string,

}


export default async function DetailPage({params} : {params:{slug:string,id:string,name:string}}){
    const Params = await params
    const {slug,id} = Params

    return(
        <>
            <Suspense fallback={<SekeletonDetail/>}>
                <DisplayDetail id={id} slug={slug}/>
            </Suspense>
            
        </>
    )
}


async function DisplayDetail({id,slug}:{id:string,slug:string}){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(`${baseUrl}/api/detail/${slug}?id=${id}`, {next:{revalidate:60}})
    const {data,status} : {data:res,status:number} = await res.json()

    if(status !== 200) return notFound()

    const rawImageUrl =
        isPerusahaanObject(data.perusahaan)
        ? data.perusahaan.imageUrl
        : data.imageUrl
        ?? null
    
    const FetchImage=
        rawImageUrl && rawImageUrl.includes("|")
        ? rawImageUrl.split("|")[0]
        : '/vercel.svg'

    return(
        <>
            <div className=" lg:px-40 md:20 xl:px-52 px-10 my-5 py-5 flex justify-center">
                <div className=" w-full bg-white shadow-lg rounded-2xl">
                    
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 py-20 px-10">
                    
                        
                        <div className=" bg-gray-100 flex items-center justify-center self-center p-6 w-[300px] h-[300px] relative">

                            <Image 
                                src={FetchImage} 
                                alt={''} 
                                className=" object-cover "
                                fill
                                sizes="full"
                                priority={false}
                                decoding='async'
                                quality={80}
                                />
                        </div>
                        <div className="flex-1 flex flex-col ">
                            <h1 className="text-3xl font-bold text-gray-900 my-4 mb-1">
                            {data.name}
                            </h1>
                            
                            {isPerusahaanObject(data.perusahaan) ? 
                                (<>
                                    <Link href={`/detail/perusahaan/${data.perusahaan.id}/${encodeURIComponent(data.perusahaan.name.replace(/ /g,'-'))}`} className="text-xl font-semibold text-blue-400 mb-2 capitalize">
                                        Dari {data.perusahaan.name}
                                    </Link>  
                                    <p  className="text-md font-semibold text-gray-700 mb-2 italic">
                                        <i className="fa-solid fa-location-dot mt-1 text-gray-400"></i>{data.perusahaan.alamat}
                                    </p>
                                    <h2 className="font-semibold text-xl text-orange-400 underline shrink-0 mt-3">Kualifikasi</h2>

                                    <ol className="list-disc list-inside" type="1">
                                        <li className="text-lg font-semibold text-gray-700  capitalize">
                                            Menguasai {data.keahlian}
                                        </li>  
                                        <li className="text-lg font-semibold text-gray-700  capitalize">
                                        Diutamakan Jurusan {data.jurusan}
                                        </li>    
                                    </ol>
                                    
                                </>)
                                :
                                // render Jika Sebuah Perusahaan
                                (<>
                                    <p className="text-xl font-semibold text-gray-700 mb-2 capitalize italic">
                                        <i className="fa-solid fa-location-dot mt-1 text-gray-400"></i>{data.alamat}
                                    </p>  
                                    
                                </>)
                            }

                            {isPerusahaanObject(data.perusahaan)?
                                (
                                    <>
                                        <h2 className="font-semibold text-xl underline mt-3 capitalize">Deskripsi {slug}</h2>
                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            {data.deskripsi}
                                        </p>
                                        
                                    </>
                                )
                                :
                                (
                                    <>
                                        <h2 className="font-semibold text-xl underline mt-3">Deskripsi Perusahaan</h2>
                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            {data.deskripsi}
                                        </p>
                                    </>
                                )
                            }
                            

                            {/* <button className="w-full md:w-max bg-black text-white px-10 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                            
                            </button> */}
                        </div>
                        

                    </div>
                </div>
            </div>
            <div className="lg:px-40 md:20 xl:px-52 px-10 my-5 py-5">
                <h2 className="capitalize text-xl font-semibold ">Jelajahi {slug} Terkait</h2>
                <Suspense fallback={<ListCardSkeleton Total={6}/>}>
                    <FeedList endpoint={slug} jurusan={isPerusahaanObject(data.perusahaan) ? data.jurusan : null}/>
                </Suspense>
            </div>
            
        </>
    )
}

async function FeedList({endpoint ,jurusan} : {endpoint:string,jurusan?:string | null}) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    console.log(`${baseUrl}/api/list/${endpoint}?order[createAt]=desc&limit=5${jurusan ? `&order[jurusan]=${jurusan}` : ''}`)

    const res = await fetch(`${baseUrl}/api/list/${endpoint}?order[createAt]=desc&limit=5${jurusan ? `&order[jurusan]=${jurusan}` : ''}`, {
        next:{revalidate:60}
    })

  const {data} = await res.json()
    return(
        <>  
            <ListCardComponents2 DataList={data} Path={endpoint}/>
        </>
    )
}

function SekeletonDetail(){
    return(
        <>
                        <div className=" lg:px-40 md:20 xl:px-52 px-10 my-5 py-5 flex justify-center">
                <div className=" w-full bg-white shadow-lg rounded-2xl">
                    
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 py-20 px-10">
                    
                        
                        <div className=" bg-gray-100 flex items-center justify-center p-6 w- w-[300px] h-[300px] relative">
                            <div className="w-40 h-40 border-20 border-gray-300 border-r-transparent rounded-full animate-spin"></div>
                        </div>
                        <div className="flex-1 flex flex-col transform-gpu will-change-transform">
                            
                            <div className="text-3xl font-bold my-4 mb-0 w-full h-7 bg-gray-300 animate-pulse  "></div>
                            <div className="text-3xl font-bold my-4 mb-1 w-3/5 h-5 bg-gray-300 animate-pulse  "></div>
                            
                            
                            
                            <div className="text-2xl font-semibold bg-gray-300 animate-pulse mb-2 mt-4 capitalize w-2/3 h-7"></div>
                            <div className="text-2xl font-semibold bg-gray-300 animate-pulse mb-2 capitalize w-2/5 h-5"></div>
                            <div className="text-2xl font-semibold bg-gray-300 animate-pulse mb-2 capitalize w-2/4 h-5"></div>


                            <div className="text-3xl font-bold my-4 mb-2 w-2/12 h-7 bg-gray-300 animate-pulse  "></div>
                            <div className="text-2xl font-semibold bg-gray-300 animate-pulse mb-2 capitalize w-full h-4"></div>
                            <div className="text-2xl font-semibold bg-gray-300 animate-pulse mb-2 capitalize w-2/5 h-4"></div>
                            <div className="text-2xl font-semibold bg-gray-300 animate-pulse mb-2 capitalize w-2/4 h-4"></div>

                            {/* <button className="w-full md:w-max bg-black text-white px-10 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                            
                            </button> */}
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}