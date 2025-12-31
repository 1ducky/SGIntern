import prisma from "@/lib/db";
import { Suspense } from "react";


export default function Dashboard () {

    return (
        <>
            <div className="w-full mx-auto md:rounded-tr-2xl p-5 rounded-b-2xl bg-white">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
                        <p className="text-slate-500 text-sm">Monitoring Data Magang & Mitra Perusahaan</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    
                    <div className="lg:w-3/4">
                        <div className="flex items-center gap-2 mb-4">
                            <i className="fa-solid fa-chart-line text-blue-500"></i>
                            <h2 className="text-lg font-semibold text-slate-700">Visualisasi Data</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-sm font-medium text-slate-500 mb-4">Tren Lowongan Per Bulan</h3>
                                <div className="h-48 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
                                    <p className="text-blue-400 text-xs text-center">[ Area Chart: Kenaikan Lowongan ]</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-sm font-medium text-slate-500 mb-4">Distribusi Sektor Perusahaan</h3>
                                <div className="h-48 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
                                    <p className="text-blue-400 text-xs text-center">[ Bar Chart: IT, Finance, Kreatif ]</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-sm font-medium text-slate-500 mb-4">Status Peserta Magang</h3>
                                <div className="h-48 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
                                    <p className="text-blue-400 text-xs text-center">[ Donut Chart: Aktif, Selesai, Pending ]</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-sm font-medium text-slate-500 mb-4">Top 5 Mitra Perusahaan</h3>
                                <div className="space-y-3 mt-2">
                                    <div className="w-full bg-slate-100 rounded-full h-4">
                                        <div className="bg-blue-500 h-4 rounded-full w-9/10" ></div>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-4">
                                        <div className="bg-blue-400 h-4 rounded-full w-3/4" ></div>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-4">
                                        <div className="bg-blue-300 h-4 rounded-full w-3/5" ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4">
                        <div className="flex items-center gap-2 mb-4">
                            <i className="fa-solid fa-database text-blue-500"></i>
                            <h2 className="text-lg font-semibold text-slate-700">Ringkasan Data</h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-linear-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-md text-white">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider">Total Perusahaan</p>
                                        <Suspense fallback={'Loading...'}>
                                            <GetPerusahaanCount/>
                                        </Suspense>
                                    </div>
                                    <i className="fa-solid fa-building text-blue-300 text-xl"></i>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Lowongan Aktif</p>
                                        <Suspense fallback={'Loading...'}>
                                            <GetLowonganCount/>
                                        </Suspense>
                                    </div>
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <i className="fa-solid fa-briefcase text-blue-600"></i>
                                    </div>
                                </div>
                                <div className="mt-4 h-1 w-full bg-slate-100 rounded-full">
                                    <div className="bg-blue-500 h-1 rounded-full w-[65%]" ></div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Magang Aktif</p>
                                        <Suspense fallback={'Loading...'}>
                                            <GetMagangCount/>
                                        </Suspense>
                                    </div>
                                    <div className="bg-emerald-100 p-2 rounded-lg">
                                        <i className="fa-solid fa-user-graduate text-emerald-600"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

async function GetPerusahaanCount() {
    // Simulasi pengambilan data dari database
    const res = await prisma.perusahaan.count();
    const data = res.toString();
    
    return(
        <>
            <h4 className="text-3xl font-bold mt-1">{data}</h4>
        </>
    )
}
async function GetLowonganCount() {
    // Simulasi pengambilan data dari database
    const res = await prisma.lowongan.count();
    const data = res.toString();
    
    return(
        <>
            <h4 className="text-3xl font-bold mt-1 text-slate-800">{data}</h4>
        </>
    )
}
async function GetMagangCount() {
    // Simulasi pengambilan data dari database
    const res = await prisma.magang.count();
    const data = res.toString();
    
    return(
        <>
            <h4 className="text-3xl font-bold mt-1 text-slate-800">{data}</h4>
        </>
    )
}