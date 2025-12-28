'use client'
import Link from "next/link"
import usePageHref from "@/utils/GetPageHref"

export const Pagination = ({Total, Page} : {Total:number, Page:number}) => {
    const {CreateHref} = usePageHref()

    const AvaliablePage = Array.from({length : 5}, (_,i) => (Page-2) + i).filter(
        num => 
            num > 0 && 
        num <= Total
    )
    console.log(AvaliablePage)
    return (
        <>
            <div className="my-10 flex flex-row gap-2 justify-center items-center">
                
                {Page > 3 ? (
                    <>
                        <Link className=" text-center transition-all duration-150 hover:text-white text-blue-400 p-3 w-12 h-12 rounded-full hover:border-transparent font-medium hover:bg-sky-700 border-sky-700 border-4" prefetch={false} href={CreateHref(Page-1)}>{'<'}</Link>
                        <Link className=" text-center transition-all duration-150 hover:text-white text-blue-400 p-3 w-12 h-12 rounded-full hover:border-transparent font-medium hover:bg-sky-700 border-sky-700 border-4" prefetch={false} href={CreateHref(1)}>1</Link>
                        <button className="hidden md:block text-center transition-all duration-150 hover:text-white text-blue-400 p-3 w-12 h-12 rounded-full hover:border-transparent font-medium hover:bg-sky-700 border-sky-700 border-4">...</button>
                    </>
                    ) : null}
                
                
                {AvaliablePage.map((page,i) => (
                    <Link className={` text-center transition-all duration-150 hover:text-white text-blue-400 p-3 w-12 h-12 rounded-full hover:border-transparent font-medium hover:bg-sky-700 border-sky-700 border`} key={i} prefetch={false} href={CreateHref(page)}>
                        {page}
                    </Link>
                ))}
                
                
                {Page >= Total-3 ? null : (
                    <>
                        <button className="hidden md:block text-center transition-all duration-150 hover:text-white text-blue-400 p-3 w-12 h-12 rounded-full hover:border-transparent font-medium hover:bg-sky-700 border-sky-700 border-4">...</button>
                        <Link className=" text-center transition-all duration-150 hover:text-white text-blue-400 p-3 w-12 h-12 rounded-full hover:border-transparent font-medium hover:bg-sky-700 border-sky-700 border-4" prefetch={false} href={CreateHref(Total)}>{Total}</Link>
                        <Link className=" text-center transition-all duration-150 hover:text-white text-blue-400 p-3 w-12 h-12 rounded-full hover:border-transparent font-medium hover:bg-sky-700 border-sky-700 border-4" prefetch={false} href={CreateHref(Page+1)}>{'>'}</Link>
                    </>
                    )}
            </div>
        </>
    )
}