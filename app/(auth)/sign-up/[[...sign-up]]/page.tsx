'use client'
import { useState } from "react"
import { useSignUp } from "@clerk/nextjs";


import { useRouter } from "next/navigation";
import { HandlerSubmit, handleVerifyCode } from "@/app/hook/SignUp";
import SignUpForm from "@/component/auth/SignUpForm";
import EmailVerifyForm from "@/component/auth/EmailVerifyForm";


export default function Page() {
  const {isLoaded, signUp, setActive} = useSignUp()

  const [Error, setError] = useState(null)
  const [step, setStep] = useState("form"); 
  const [busy, setBusy] = useState(false)

  const router = useRouter()


  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center gap-10 ">
        {step === "form" && (
          <>
            <SignUpForm 
              onSubmit={async (e) => HandlerSubmit(e,isLoaded,setError,setStep,setBusy,signUp)} 
              Error={Error} 
              Loading={busy}
            />
          </>
        )}
        {step === "verifying" && (
          <>
            <EmailVerifyForm 
              OnSubmitVerify={
                async (e) => {
                  handleVerifyCode(e, signUp, setActive, router, setError,setBusy)
                }} 

              Error={Error} 
              Loading={busy}/>
          </>
        )}
        
        <div id="clerk-captcha"></div>
      </div>
    </>
  )
}
