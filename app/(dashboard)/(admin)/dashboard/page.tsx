'use client'

import { useContextUtils } from "@/utils/ContextProvider"

export default function Dashboard () {
    const Context = useContextUtils()
    return (
        <div className="w-full bg-white md:rounded-tr-2xl p-5 rounded-b-2xl flex flex-col flex-wrap">
            <h2 className="text-4xl font-medium">Dashboard</h2>
            <div className="flex flex-row flex-wrap gap-5">
                <div className="lc flex-1 flex flex-col gap-3">
                
                    <h3 className="text-2xl font-medium">Grafik</h3>
                    <div className="flex flex-row flex-wrap gap-10">
                        <div className="min-w-80 min-h-64 flex-1 bg-blue-300"></div>
                        <div className="md:min-w-96 min-w-80 min-h-64 flex-1 bg-blue-300"></div>
                        <div className="md:min-w-96 min-w-80 min-h-64 flex-1 bg-blue-300"></div>
                        <div className="md:min-w-96 min-w-80 min-h-64 flex-1 bg-blue-300"></div>
                    </div>
                </div>
                <div className="rc flex flex-col flex-wrap  pt-0 gap-3 justify-center ">
                    <h2 className="text-2xl font-medium text-center shrink-0">Jumlah Data</h2>
                    <div className="flex flex-row md:flex-col flex-wrap flex-1 justify-center gap-9 overflow-y-scroll">
                        <div className="min-w-64 min-h-40 w-64 h-40 bg-blue-300 shrink-0 grow-0"></div>
                        <div className="min-w-64 min-h-40 w-64 h-40 bg-blue-300 shrink-0 grow-0"></div>
                        <div className="min-w-64 min-h-40 w-64 h-40 bg-blue-300 shrink-0 grow-0"></div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}