'use client'
import Link from "next/link"
import { useState } from "react"
import { useSignIn } from "@clerk/nextjs";
import SocialButtons from "@/component/SocialMethodBtn";



export default function Page() {
  // Deklarasi State
  const { isLoaded, signIn, setActive } = useSignIn();
  const [error, setError] = useState("");

  //Handler Submit
  async function HandlerSubmit(e) {
    e.preventDefault()
    if (!isLoaded) return

    const email= e.target.email.value
    const password= e.target.password.value

    // Try Catch untuk mencegah Crash
    try {
      const res = await signIn.create({
        identifier : email,
        password
        
      })
      console.log(res)
      if(res.status === "complete"){
        setActive({session : res.createdSessionId})
        window.location.href = "/"
      }
    }catch(err){
      console.log(err)
      setError('Gagal Mendaptkan Akun Terkait, coba Periksa Kembali');
    }
  }
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center gap-10 ">
        <form onSubmit={HandlerSubmit} className="flex flex-col gap-3 w-lg bg-blue-200 p-10 py-16 rounded-4xl justify-between">
          <h2 className="text-2xl font-semibold self-center">Masuk ke SGIntern</h2>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <label className="text-lg" htmlFor="email">Email</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="email" name="email" id="email" placeholder="Masukan Email" required />

          <label className="text-lg" htmlFor="password">Password</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="password" name="password" id="password" min={8} required placeholder="Masukan Password"/>

          <p className="self-start font-semibold ">
            Belum Mempunyai Akun? Yuk
            <Link href={'./sign-up'} className="text-blue-900 hover:text-blue-500 transition-all duration-150"> Buat Akun Baru</Link>
            
          </p>
          <button className="bg-blue-600 hover:bg-blue-400 duration-150 transition-all p-5 py-3 rounded-full text-white font-medium text-2xl">Login</button>
          <h2 className="text-xl text-center font-medium mt-10">Atau Menggunakan</h2>
          <div className="flex flex-row justify-center gap-10">
            <SocialButtons/>
          </div>
        </form>
      </div>
    </>
  )
}