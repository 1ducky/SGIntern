import Image from "next/image"
import Link from "next/link"
import truncate from "@/utils/Truncate"

type MagangType = {

    imageUrl? : string
    perusahaan? : {alamat:string, name:string} | string
    alamat? : string
    name: string
}

export const HScrollCard = ({DataList,Path} : {DataList : MagangType[], Path : string}) => {
    return(
        <div className="Scrollbar-transparent my-5 px-5 overflow-x-scroll flex flex-row flex-nowrap gap-20 transform-gpu will-change-transform rounded-2xl">
            {
                DataList.map((List,i) => {
                    
                    return(
                        <Link href={`/detail/${Path}/id/${encodeURIComponent(  List.name).replace(/ /g,'-')}}`} prefetch={false} key={i} className="flex flex-col w-40 shadow-lg">
                            <div className="image shrink-0 w-52 h-60 bg-blue-100 relative rounded-2xl">
                                <Image 
                                    src={'/vercel.svg'} 
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