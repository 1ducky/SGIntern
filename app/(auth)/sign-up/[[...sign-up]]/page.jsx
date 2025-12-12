'use client'
import Link from "next/link"
import { useState } from "react"
import { useSignUp } from "@clerk/nextjs";

import SocialButtons from "@/component/SocialMethodBtn";


export default function Page() {
  // Deklarasi State
  const { isLoaded, signUp, setActive } = useSignUp();
  const [error, setError] = useState("");

  //Handler Submit
  async function HandlerSubmit(e) {
      e.preventDefault();
  if (!isLoaded) return;

  const email = e.target.email.value;
  const username = e.target.username.value;
  const password = e.target.password.value;

  // Try Catch untuk mencegah Crash
  try {
    const res = await signUp.create({
      emailAddress: email,
      username,
      password,
    });


    if (res.status === "complete") {
      await setActive({ session: res.createdSessionId });
      window.location.href = "/";
    }
  } catch (err) {
    console.log(err)
    setError("Password Sangat Lemah");
  }
}
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center gap-10 ">
        <h2 className="text-2xl font-bold">SG Intern</h2>
        <form onSubmit={HandlerSubmit} className="flex flex-col gap-3 w-lg bg-blue-200 p-10 py-16 rounded-4xl justify-between">
          <h2 className="text-2xl font-bold self-center">Registrasi</h2>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <label className="text-lg" htmlFor="email">Email</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="email" name="email" id="email" placeholder="Masukan Email" required />

          <label className="text-lg" htmlFor="username">Nama Pengguna</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="username" name="username" id="username" placeholder="Masukan Nama Pengguna" required />

          <label className="text-lg" htmlFor="password">Password</label>
          <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="password" name="password" id="password" min={8} required placeholder="Masukan Password"/>
          <Link href={'./sign-in'} className="self-start font-bold">
            Masuk
          </Link>
          <button className="bg-blue-600 p-5 rounded-full text-white font-bold text-lg">Daftar</button>
        </form>
        <h2 className="text-2xl font-bold">Atau Menggunakan</h2>
        <div className="flex flex-row justify-center gap-10">
          <SocialButtons/>
        </div>
      </div>
    </>
  )
}
