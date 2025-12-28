import Image from "next/image"
import Link from "next/link"
import truncate from "@/utils/Truncate"
import { isPerusahaanObject } from "@/utils/isPerusahaanObj"

type Itemtype = {

    imageUrl? : string
    perusahaan? : {id:string, alamat:string, name:string, imageUrl?: string} | string
    alamat? : string
    name: string
}

export const HScrollCard = ({DataList,Path} : {DataList : Itemtype[], Path : string}) => {
    if(DataList.length === 0 || !DataList) return(
        <div className="mb-32 grow-0">
            <h2 className=" w-60 px-5 py-3 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer text-lg font-medium rounded-2xl">Tidak Ada Data Terkait</h2>
        </div>
    )
    return(
        <div className="Scrollbar-transparent my-5 px-5 overflow-x-scroll flex flex-row flex-nowrap gap-20 transform-gpu will-change-transform rounded-2xl">
            {
                DataList.map((List,i) => {
                    const rawImageUrl =
                        isPerusahaanObject(List.perusahaan)
                        ? List.perusahaan.imageUrl
                        : List.imageUrl
                        ?? null

                    const fetchImage =
                    rawImageUrl && rawImageUrl.includes("|")
                        ? rawImageUrl.split("|")[0]
                        : '/vercel.svg'

                    return(
                        <Link href={`/detail/${Path}/id/${encodeURIComponent(  List.name).replace(/ /g,'-')}}`} prefetch={false} key={i} className="flex flex-col w-40 shadow-lg">
                            <div className="image shrink-0 w-52 h-60 bg-blue-50 relative rounded-2xl overflow-hidden">
                                <Image 
                                    src={fetchImage}
                                    alt={  List.name} 
                                    className=" object-cover "
                                    fill
                                    sizes="160px"
                                    priority={false}
                                    decoding='async'/>
                            </div>
                            <h3 className="text-wrap">{truncate(List.name,25)}</h3>
                        </Link>
                    )
                })
            }
            <Link href={`/kategori/${Path}`} className="flex flex-col w-20">
                <div className="image shrink-0 w-20 h-60 bg-blue-100 relative flex justify-center items-center text-2xl rounded-2xl">
                    <div className="w-10 h-10 flex justify-center items-center bg-blue-300 rounded-full">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </Link>
        </div>
    )
}