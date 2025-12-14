
import Image from "next/image"
import Link from "next/link"

type MagangType = {
    Title : string,
    Image : string
    Perusahaan : string
    Alamat : string
}

export const ListCardComponents = ({MagangList,Path} : {MagangList : MagangType[],Path : string }) => {

    return ( <>
                <div className="mx-2 px-5 py-5 flex gap-y-2 flex-wrap flex-row transform-gpu will-change-transform">
                    {MagangList.map((Magang,i) => {
                        return (
                            <Link prefetch={false} href={`/${Path}/id/${encodeURIComponent(Magang.Title).replace(/ /g,'-')}`} key={i} className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full py-2 flex gap-1 overflow-hidden transition-opacity bg-blue-200">
                                <div className="image shrink-0 w-24 h-32 bg-blue-500 relative">
                                    <Image src={'/public/vercel.svg'} 
                                        alt={Magang.Title} 
                                        className=" object-cover "
                                        fill
                                        sizes="96px"
                                        priority={false}
                                        decoding='async'/>
                                    
                                </div>
                                <div className="flex flex-col">
                                    {/* Static */}
                                    <h3 className="text-nowrap">{Magang.Title}</h3>
                                    
                                    <h3>{Magang.Perusahaan}</h3>
                                    <div className="flex text-center flex-wrap gap-x-2 gap-y-1">
                                        <h3 className=" bg-indigo-700 px-2 rounded-full">{Magang.Alamat}</h3>
                                    </div>
                                </div>
                                
                                
                            </Link>
                        )
                    })}
                </div>
            </>)
}