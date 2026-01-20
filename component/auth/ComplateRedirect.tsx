import Link from "next/link";

export default function RedirectInformation ({EmailAddress,info}){
    return (

        <div className="w-full max-w-xl min-w-md mx-auto bg-white p-5 rounded-2xl shadow-2xl my-40">
            <div className="text-center relative">
                <div className="absolute inline-block -top-28 left-1/2  -translate-x-1/2">
                    <div className="w-24 h-24 shadow-2xl bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto ">
                        <i className="fa-regular fa-circle-check w-12 h-12 text-white text-5xl"></i>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-3 mt-10">
                Berhasil {info} Akun <br />{EmailAddress || ''}! 🎉
                </h2>
                <p className="text-gray-600 text-lg mb-2">
                Login berhasil!
                </p>
                <p className="text-gray-500 mb-8">
                Anda akan segera dialihkan ke menu utama
                </p>

                <div className=" p-6 mb-6">
                    <Link
                    href={'/'}
                    className="w-full py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                    >
                        <span className="flex items-baseline justify-center gap-2 text-blue-600 hover:text-blue-300">
                            Langsung ke Menu Utama
                            <i className="fa-solid fa-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                        </span>
                    </Link>

                    <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-white rounded-xl border-2 border-gray-200">

                        <i className="fa-regular fa-circle-check w-6 h-6 text-green-500 mx-auto mb-2"></i>
                        <p className="text-xs text-gray-600 font-medium">Terverifikasi</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border-2 border-gray-200">
                        <i className="fa-solid fa-lock w-6 h-6 text-blue-500 mx-auto mb-2"></i>
                        <p className="text-xs text-gray-600 font-medium">Aman</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border-2 border-gray-200">

                        <i className="fa-solid fa-user w-6 h-6 text-purple-500 mx-auto mb-2"></i>
                        <p className="text-xs text-gray-600 font-medium">Aktif</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}