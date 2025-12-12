import Image from "next/image"
import Link from "next/link"

type MagangType = {
    Title : string,
    Image : string
    Perusahaan : string
    Alamat : string
}

export const HScrollCard = ({MagangList,Path} : {MagangList : MagangType[], Path : string}) => {
    return(
        <div className="Scrollbar-transparent my-5 px-5 overflow-x-scroll flex flex-row flex-nowrap gap-5">
                    {
                        MagangList.map((Magang,i) => {
                            
                            return(
                                <Link href={`/${Path}/id/${encodeURIComponent(Magang.Title).replace(/ /g,'-')}}`} key={i} className="flex flex-col w-40">
                                    <div className="image shrink-0 w-40 h-60 bg-black relative">
                                        <Image 
                                            src={'/public/vercel.svg'} 
                                            alt={Magang.Title} 
                                            className=" object-cover "
                                            fill
                                            sizes="160px"
                                            priority={false}
                                            decoding='async'/>
                                    </div>
                                    <h3 className="text-wrap">{Magang.Perusahaan}</h3>
                                </Link>
                            )
                        })
                    }
                </div>
    )
}