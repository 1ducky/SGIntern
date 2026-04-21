'use client'
import { signIn, signOut } from "next-auth/react";


export default function testPage() {
  async function Handler() {
    // step 1: login ke endpoint kamu
    const login = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email:'admin@gmail.com', password:'admin123' }),
    });
    console.log(await login.json())

    // step 2: sync NextAuth
    const auth = await signIn("credentials", {
      email:'admin@gmail.com',
      password:'admin123',
      redirect: false,
    });
    console.log(auth)
  }

  async function refresh(){
    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include"
    })
    console.log(await res.json())
  }

  async function Logout(){
    const res = await fetch("/api/auth/logout",{method:"POST"})
    console.log(await res.json())
    await signOut({redirect: false})
  }
  return (
    <>
      <button onClick={ Handler}>Login</button>
      <button onClick={ refresh}>Refresh</button>
      <button onClick={ Logout}>Logout</button>

    </>
  );
}
