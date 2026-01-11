import Link from "next/link"
import SocialButtons from "../SocialMethodBtn"
import { useRef } from "react";

export default function SignUpForm({onSubmit, Loading, Error}) {
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