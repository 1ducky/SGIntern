import Link from "next/link"
import SocialButtons from "../SocialMethodBtn"
import { useRef, useState } from "react";

export default function SignUpFormold({onSubmit, Loading, Error}) {
    const passwordref =  useRef(null);
    return(
        <>
            <form onSubmit={onSubmit} className="flex flex-col gap-3 w-lg bg-blue-200 p-10 py-16 rounded-4xl justify-between">
          <h2 className="text-3xl font-bold self-center text-orange-400">Daftar</h2>
          {Error && <p className="text-red-600 text-sm">{Error}</p>}
          <label className="text-lg" htmlFor="email">Email</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="email" name="email" id="email" placeholder="Masukan Email" required />

          <label className="text-lg" htmlFor="username">Nama Pengguna</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="text" name="username" id="username" placeholder="Masukan Nama Pengguna" required />

          <label className="text-lg" htmlFor="password">Kata Sandi</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="password" name="password" id="password" min={8} required placeholder="Masukan Kata Sandi" ref={passwordref}/>
          <p className="self-start font-semibold ">
            Sudah Mempunyai Akun? Yuk
            <Link href={'./sign-in'} className="text-blue-900 hover:text-blue-500 transition-all duration-150"> Masuk</Link>
            
          </p>
          <button className={` hover:bg-blue-400 ${Loading ? 'bg-blue-300' : 'bg-blue-600'} duration-150 transition-all p-5 py-3 rounded-full text-white font-medium text-2xl`}>{Loading ? 'Memproses' : 'Daftar'}</button>
          <h2 className="text-xl text-center italic">Login dengan</h2>
          <div className="flex flex-row justify-center gap-10">
            <SocialButtons/>
          </div>
          

        </form>
        </>
    )
}

export function SignUpForm({onSubmit,Loading,Error}) {
  const [showPassword,setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState<boolean>(false)

  const[pass,setPass] = useState<string>("")
  const[passConfirm,setPassConfirm] = useState<string>("")

  const isDisabled = pass === "" || passConfirm === "" || pass !== passConfirm
  const isSame = pass === passConfirm
  return (
    <div className="w-full max-w-xl w-min-md mx-auto my-32 p-10 bg-white shadow-2xl rounded-2xl">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Buat Akun Baru</h2>
        <p className="text-gray-600">Bergabunglah dengan kami hari ini</p>
      </div>

      {/* <StatusMessage /> */}

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          {Error && <p className="text-red-600 text-sm">{Error}</p>}
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Pengguna</label>
          <div className="relative">
            <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
            <input
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
              type="text"
              name="username" 
              id="username" 
              placeholder="Budi Setiawan" 
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <div className="relative">
            <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
            <input
              type="email"
              name="email"
              id="email" 
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
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
              placeholder="Min. 8 karakter"
              name="password" 
              id="password" 
              min={8} 
              required
              onChange={(e) => setPass(e.target.value)}
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

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Konfirmasi Password</label>
          {!isSame && (
            <label className="block text-sm font-semibold text-red-700 mb-2">Password Tidak Sama</label>
          )}
          <div className="relative">
            <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
              placeholder="Ulangi password"
              name="confirm" 
              id="confirm" 
              min={8} 
              required
              onChange={(e) => setPassConfirm(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <i className="fa-solid fa-eye-slash w-5 h-5"></i> : <i className="fa-solid fa-eye w-5 h-5"></i>}
            </button>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              className="w-5 h-5 rounded border-gray-300 mt-0.5"
            />
            <span className="text-sm text-gray-700">
              Saya menyetujui{' '}
              <Link href={'#'} className="text-blue-600 hover:text-blue-700 font-semibold">
                Syarat & Ketentuan
              </Link>{' '}
              dan{' '}
              <Link href={'#'} className="text-blue-600 hover:text-blue-700 font-semibold">
                Kebijakan Privasi
              </Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={Loading || isDisabled}
          className="w-full py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {Loading ? 'Memproses...' : 'Daftar'}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-linear-to-b from-blue-50 to-white text-gray-500">Atau daftar dengan</span>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-10">
          <SocialButtons/>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Sudah punya akun?{' '}
          <Link href={'/sign-in'} className="text-blue-600 hover:text-blue-700 font-semibold">
            Login di sini
          </Link>
        </p>
      </form>
    </div>
  )
}