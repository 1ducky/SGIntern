
import { isPerusahaanObject } from "@/utils/isPerusahaanObj"
import truncate from "@/utils/Truncate"
import Image from "next/image"
import Link from "next/link"

type Itemtype = {
    id : string
    name : string,
    imageUrl? : string
    perusahaan? : {id:string, alamat:string, name:string, imageUrl?: string, deskripsi? : string} | string
    alamat? : string
    deskripsi? : string
}

export const ListCardComponents2 = ({DataList,Path} : {DataList : Itemtype[],Path : string }) => {
    if(DataList.length === 0 || !DataList) return(
        <div className="mb-32 grow-0">
            <h2 className=" w-60 px-5 py-3 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer text-lg font-medium rounded-2xl">Tidak Ada Data Terkait</h2>
        </div>
    )

    

    return ( <>
                <div className="mx-2 py-5 flex gap-y-2 flex-wrap flex-row transform-gpu will-change-transform">
                    {DataList.map((List,i) => {
                        const rawImageUrl =
                            isPerusahaanObject(List.perusahaan)
                            ? List.perusahaan.imageUrl
                            : List.imageUrl
                            ?? null
    
                        const fetchImage =
                        rawImageUrl && rawImageUrl.includes("|")
                            ? rawImageUrl.split("|")[0]
                            : '/vercel.svg'
                        return (
                            
                            <Link prefetch={false} href={`/detail/${Path}/${List.id}/${encodeURIComponent(List.name.replace(/ /g,'-'))}`} key={i} className="xl:basis-1/3 lg:basis-1/2 basis-full py-2 flex overflow-hidden transition-opacity px-3">
                                <div className="bg-white p-6 rounded-xl  border border-gray-100 flex flex-col w-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-4 relative object-cover">
                                        <Image src={fetchImage} 
                                            alt={List.name} 
                                            className=" object-cover "
                                            fill
                                            sizes="96px"
                                            priority={false}
                                            decoding='async'
                                            loading="lazy"
                                            />
                                        
                                    </div>
                                    <h3 className="text-lg text-gray-700 mb-4 leading-tight capitalize">{Path} {List.name}</h3>
                                    <div className="mt-auto space-y-3">
                                        {/* Static */}
                                        <div className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                                            <span>{isPerusahaanObject(List.perusahaan) ? List.perusahaan.alamat : List.alamat}</span>
                                            <i className="fa-solid fa-location-dot mt-1 text-gray-400"></i>
                                        </div>
                                        <div className="flex flex-col gap-3 text-xs text-gray-500 items-start">

                                            <span>{truncate(List.deskripsi ?? (isPerusahaanObject(List.perusahaan) ? List.perusahaan.deskripsi ?? 'Tidak ada Deskripsi' : 'Tidak Ada Deskripsi'),60)}</span>
                                            <button className="text-white hover:text-blue-600 font-medium px-3 py-2 rounded-xl bg-blue-600 hover:bg-transparent hover:border-blue-600 border-2 border-transparent">Detail</button>
                                        </div>

                                    </div>
                                </div>
                                
                            </Link>
                        )
                    })}

                </div>
            </>)
}