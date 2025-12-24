import prisma from "@/lib/db"
import { description } from "@/StatisData/StaticCV"
import { jurusanText, keahlihan } from "@/StatisData/StatisObj"

import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { notFound } from "next/navigation"
type Props = {
    params:{
        id: string
    }
}

export default async function StaticCV ({params}:Props){
    const {id} = await params
    const clrekuser = await currentUser()
    let userData
    try{
        userData= await prisma.user.findUnique(
            {
                where:{id},
                select: {
                    email: true,
                    name: true,
                    role: true,
                    jurusan: true,
                    keahlian: true,
                    kelas: true,
                    kelamin : true,
                    pendidikan : true,
                    link:true
                }
            }
        )
    }catch{
        return notFound()
    }
    if(!userData?.jurusan) return <h2>User Belum Membuat CV</h2>

    type Jurusantype = typeof jurusanText[number]
    
    function isJurusan(value: unknown): value is Jurusantype {
    return typeof value === 'string' && jurusanText.includes(value as Jurusantype)
    }

    return(
        <>
            <div className="max-w-4xl mx-auto my-10 bg-white shadow-2xl flex flex-col md:flex-row min-h-[1000px]">
        
            <div className="w-full md:w-1/3 bg-[#d1e1e9] p-8 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden mb-8 shadow-lg relative">
                    <Image src={clrekuser?.imageUrl || ''} alt="profile" sizes="100px" quality={80} fill className="absolute"/>
                </div>

                <div className="w-full mb-10 text-[#2c4c58]">
                    <h2 className="text-xl font-bold tracking-widest border-b-2 border-[#2c4c58] mb-4 pb-1 uppercase">Kontak</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <i className="fas fa-envelope w-5 text-center"></i>
                            <span className="text-sm">{userData?.email}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fas fa-map-marker-alt w-5 text-center"></i>
                            <span className="text-sm leading-tight">Jalan Swadaya 1, Jakarta Pusat, 11765</span>
                        </li>
                    </ul>
                </div>

                <div className="w-full text-[#2c4c58]">
                    <h2 className="text-xl font-bold tracking-widest border-b-2 border-[#2c4c58] mb-4 pb-1 uppercase">Riwayat Pemdidikan</h2>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
                        {userData?.pendidikan?.trim().split('+').map((item,i) => (
                            <li key={i}>
                                <a href={`https://www.google.com/search?q=${item}`}>{item}</a>
                            
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-full md:w-2/3 p-10 bg-white text-gray-700">
                
                <div className="mb-10">
                    <p className="text-lg tracking-[0.2em] text-gray-500 uppercase">Jurusan {userData?.jurusan}</p>
                    <h1 className="text-5xl font-bold text-[#1e3a4d] mt-2 mb-6 uppercase tracking-tighter">{userData?.name}</h1>

                    <p className="text-sm text-gray-600 text-justify leading-relaxed">
                        {description[userData?.jurusan]}
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-xl font-bold tracking-[0.3em] text-[#1e3a4d] border-b-2 border-gray-200 mb-6 pb-1 uppercase">Keahlian {userData?.keahlian}</h2>
                    <p className="text-sm text-gray-600 text-justify leading-relaxed">
                        {isJurusan(userData.jurusan) ? keahlihan[userData.jurusan][userData.keahlian].deskripsi: ''}
                    </p>
                </div>
                
                {userData.link && (
                    <div className="mb-10">
                        <h2 className="text-xl font-bold tracking-[0.3em] text-[#1e3a4d] border-b-2 border-gray-200 mb-6 pb-1 uppercase">Pencapaian</h2>
    
                        <div className="mb-6">
                            <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600">
                                {userData?.link?.trim().split('+').map((item,i)=> (
                                <li key={i} className="text-blue-600 hover:text-blue-300"><a  href={item}>{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                


            </div>
        </div>
        </>
    )



}