'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type InfoItem = {
  title: string
  description: string
  image: string
}

export const CorousselComponent = ({Information}: {Information: InfoItem[]}) => {
    // Hitung Total Informasi Yang Tersedia
    const TotalSlide = Information?.length || 5
    // Mengetahui Posisi Slide
    const [CurrentSlide, setCurrentSlide ] = useState(0)

    // Handle Button
    const NextSlide = () => {
        setCurrentSlide(prev => (prev < TotalSlide - 1 ? prev + 1 : prev - (TotalSlide-1)))
    }
    const PrevSlide = () => {
        setCurrentSlide(prev => (prev > 0 ? prev -1 : prev + (TotalSlide-1)))
    }

    return (
    <>
        <div className="w-full h-96 overflow-hidden relative transform-gpu will-change-transform">
            <div className="absolute bg-blue-300 p-1 px-2 rounded-full z-21 m-5 ">Informasi Terbaru</div>
                <ul className="img flex flex-nowrap h-96 transition-transform duration-500 relative transform-gpu" style={
                    {
                        width:`${TotalSlide*100}vw`,
                        transform: `translateX(-${CurrentSlide * 100}vw)`,
                        
                    }
                    }>
                    {Information.map ((item,index) =>
                    {

                        return (
                        <Link href={'/information'} key={index} className="w-screen h-full bg-blue-500 flex items-center justify-center relative z-20">
                            <Image src={'/public/vercel.svg'} 
                            alt={item.title} 
                            className=" object-cover object-[center_10%] "
                            fill
                            decoding='async'/>
                            <div className="absolute bottom-0 w-full h-[20vh] bg-black/60 text-white flex items-center justify-center flex-col cursor-pointer" >
                                <h2 className="text-xl md:text-3xl p-4 bg-slate-800/60 rounded-full " >{item.title}</h2>
                                <p className="px-5 mt-2">{item.description}</p>
                            </div>
                        </Link>
                    )})}
                    </ul>                 
            <button className="absolute w-24 h-full top-0 left-0 z-21 flex justify-center items-center" onClick={PrevSlide}>
                    <div className="w-10 h-10 flex justify-center items-center bg-blue-600 rounded-full">
                        <i className="fa-solid fa-angle-left"></i>
                    </div></button>
            <button className="absolute w-24 h-full top-0 right-0 z-21 flex justify-center items-center" onClick={NextSlide}>
                <div className="w-10 h-10 flex justify-center items-center bg-blue-600 rounded-full">
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </button>
        </div>
    </>
  )
}