
import { isPerusahaanObject } from "@/utils/isPerusahaanObj"
import truncate from "@/utils/Truncate"
import Image from "next/image"
import Link from "next/link"

type Itemtype = {
    id:string
    name : string,
    imageUrl? : string
    perusahaan? : {id:string, alamat:string, name:string, imageUrl?: string, deskripsi? : string} | string
    alamat? : string
    deskripsi? : string
}

export const ListCardComponents = ({DataList,Path} : {DataList : Itemtype[],Path : string }) => {
    if(DataList.length === 0 || !DataList) return(
        <div className="mb-32 grow-0">
            <h2 className=" w-60 px-5 py-3 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer text-lg font-medium rounded-2xl">Tidak Ada Data Terkait</h2>
        </div>
    )


    

    return ( <>
                <div className="mx-2  py-5 flex gap-y-2 flex-wrap flex-row transform-gpu will-change-transform">
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
                            
                            <Link prefetch={false} href={`/detail/${Path}/${List.id}/${encodeURIComponent(List.name.replace(/ /g,'-'))}`} key={i} className="xl:basis-1/3 lg:basis-1/2 basis-full py-5 flex  transition-opacity px-3">
                                <div className="w-full flex gap-5 bg-white rounded-2xl overflow-hidden text-black shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                                    <div className="image shrink-0 w-32 h-32 bg-blue-300 relative rounded-2xl overflow-hidden object-contain self-center mx-2">
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
                                    <div className="flex flex-col mt-5">
                                        {/* Static */}
                                        <h3 className="text-nowrap capitalize font-bold">{Path} {List.name}</h3>
                                        
                                        <h3><i className="fa-solid fa-location-dot mt-1 text-gray-400"></i> {truncate(List.alamat ?? (isPerusahaanObject(List.perusahaan) ? List.perusahaan.alamat ?? 'Tidak Ada Alamat' : 'Tidak Ada Alamat'),30)}</h3>
                                        <h2>{truncate(List.deskripsi ?? (isPerusahaanObject(List.perusahaan) ? List.perusahaan.deskripsi ?? 'Tidak ada Deskripsi' : 'Tidak Ada Deskripsi'),30)}</h2>
                                    </div>
                                </div>
                                
                                
                                
                            </Link>
                        )
                    })}
                </div>
            </>)
}