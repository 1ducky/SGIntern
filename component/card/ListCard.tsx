
import { isPerusahaanObject } from "@/utils/isPerusahaanObj"
import Image from "next/image"
import Link from "next/link"

type Itemtype = {
    name : string,
    imageUrl? : string
    perusahaan? : {id:string, alamat:string, name:string, imageUrl?: string} | string
    alamat? : string
}

export const ListCardComponents = ({DataList,Path} : {DataList : Itemtype[],Path : string }) => {

    return ( <>
                <div className="mx-2 px-5 py-5 flex gap-y-2 flex-wrap flex-row transform-gpu will-change-transform">
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
                            
                            <Link prefetch={false} href={`/detail/${Path}/id/${encodeURIComponent(List.name).replace(/ /g,'-')}`} key={i} className="xl:basis-1/3 lg:basis-1/2 basis-full py-2 flex overflow-hidden transition-opacity px-3">
                                <div className="w-full flex gap-5 bg-blue-600 rounded-2xl overflow-hidden shadow-lg text-white">
                                    <div className="image shrink-0 w-28 h-32 bg-blue-100 relative rounded-2xl overflow-hidden">
                                        <Image src={fetchImage} 
                                            alt={List.name} 
                                            className=" object-cover "
                                            fill
                                            sizes="96px"
                                            priority={false}
                                            decoding='async'/>
                                        
                                    </div>
                                    <div className="flex flex-col">
                                        {/* Static */}
                                        <h3 className="text-nowrap">{List.name}</h3>
                                        
                                        <h3>{isPerusahaanObject(List.perusahaan) ? List.perusahaan.alamat : List.alamat}</h3>
                                    </div>
                                </div>
                                
                                
                                
                            </Link>
                        )
                    })}
                </div>
            </>)
}