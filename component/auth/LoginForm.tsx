import Link from "next/link";
import { useState } from "react";
import SocialButtons from "../SocialMethodBtn";

export default function LoginForm ({handleLogin,Error,Loading}) {
    const [showPassword,setShowPassword] = useState<boolean>(false)
    return(
        <>
            <div className="w-full max-w-xl min-w-md p-5 my-40 bg-white rounded-2xl shadow-2xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang Kembali</h2>
                    <p className="text-gray-600">Silakan login untuk melanjutkan</p>
                </div>

                {Error && <p className="text-red-600 text-sm">{Error}</p>}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <div className="relative">
                            <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                            <input
                                type="text"
                                name="identifier"
                                id="identifier" 
                                required
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                                placeholder="nama@exemple.com"
                            />
                        </div>
                        </div>

                        <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                            <input
                            type={showPassword ? 'text' : 'password'}
                            name="password" 
                            id="password" 
                            min={8} 
                            required
                            className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                            placeholder="••••••••"
                            />
                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                            {showPassword ? <i className="fa-solid fa-eye-slash w-5 h-5"></i> : <i className="fa-solid fa-eye w-5 h-5"></i>}
                            </button>
                        </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                        <Link href={'/lupa-akun'}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                            Lupa password?
                        </Link>
                        </div>

                        <button
                        type="submit"
                        disabled={Loading}
                        className="w-full py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        {Loading ? 'Memproses...' : 'Login'}
                        </button>

                        <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-linear-to-b from-blue-50 to-white text-gray-500">Atau lanjutkan dengan</span>
                        </div>
                        </div>

                        <div className="flex flex-row justify-center gap-10">
                        <SocialButtons/>
                        </div>

                        <p className="text-center text-gray-600 mt-6">
                        Belum punya akun?{' '}
                        <Link href={'/sign-up'}
                            className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            Daftar sekarang
                        </Link>
                        </p>
                    </form>
                </div>
        </>
    )
}