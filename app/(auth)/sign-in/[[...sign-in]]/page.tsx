'use client'
import { LoginAccount } from "@/app/hook/useLoging";
import RedirectInformation from "@/component/auth/ComplateRedirect";
import LoginForm from "@/component/auth/LoginForm";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm() {
    const {isLoaded, signIn, setActive} = useSignIn()
    
    const [email,setEmail] = useState("")
    const [Error, setError] = useState(null)
    const [step, setStep] = useState("form"); 
    const [busy, setBusy] = useState(false)

    const router = useRouter()

    return(
        <>
            {step === "form" && (
                <LoginForm
                    handleLogin={
                        async (e) => LoginAccount(e,isLoaded,signIn,setActive,setError,router,setBusy,setStep,setEmail)
                    }
                    Error={Error}
                    Loading={busy}
                
                />
            )}
            {step === "completed" && (
                <RedirectInformation 
                    EmailAddress={email}
                    info={"Masuk"}
                />
            )}
        </>
    )
}