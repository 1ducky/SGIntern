'use client'

import { usePathname,useSearchParams } from "next/navigation"

export default function usePageHref () {
    const Pathaname= usePathname()
    const SearchParams= useSearchParams()

    const CreateHref = (Page:number) => {
        const Param = new URLSearchParams(SearchParams.toString())
        Param.set("page", Page.toString())
        return `${Pathaname}?${Param.toString()}`
    }

    return {CreateHref}
}