import Link from "next/link";
import Image from "next/image";

export const CategoryFeature = () => {
    return(
        <>
            <div className="flex justify-center p-6 relative bg-linear-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image 
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" 
                        alt="JobStreet - Platform Pencarian Kerja Terbaik di Indonesia untuk Lowongan Pekerjaan dan Karir Profesional"
                        className="w-full h-full object-cover"
                        itemProp="image"
                        fill
                    />
                </div>
                <div className="max-w-5xl w-full flex flex-col items-center gap-10 z-10">
                    <h2 className="font-medium text-2xl text-white">Kategori</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Link prefetch={false} href={'/kategori/magang'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center">
                            <div className="bg-sky-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500 transition-colors">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Magang</h3>
                            <p className="text-gray-500 text-sm mb-4 capitalize">Temukan pengalaman kerja pertama untuk siswa <span className="uppercase">SMK</span></p>
                            <span className="text-xs font-semibold bg-sky-200 text-sky-700 py-1 px-3 rounded-full">150+ Posisi</span>
                        </Link>
                        <Link prefetch={false} href={'/kategori/lowongan'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center border-t-4 border-orange-400">
                            <div className="bg-orange-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Lowongan</h3>
                            <p className="text-gray-500 text-sm mb-4 capitalize">Peluang kerja full-time dan part-time untuk profesional.</p>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-700 py-1 px-3 rounded-full">800+ Aktif</span>
                        </Link>
                        <Link prefetch={false} href={'/kategori/perusahaan'} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500 transition-colors">
                                <i className="fa-solid fa-building"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Mitra</h3>
                            <p className="text-gray-500 text-sm mb-4 capitalize">Jelajahi Profil Perusahaan yang Bermitra Dengan <span className="uppercase">SMK</span>  Sunan Giri Menganti</p>
                            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full">45 Mitra</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}