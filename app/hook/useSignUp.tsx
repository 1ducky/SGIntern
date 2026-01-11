'use client'

import { useState } from "react";
import {EmailVerify} from "../service/ClerkAuth.service";
import ServerLog from "@/app/hook/Logging.app";


export default function UseSignUpFlow(SignUp, setActive, router){
    const [Loading,setLoading] = useState<boolean>(false)
    const [Error, setError] = useState<string | null>(null)
    const [Step, setStep] = useState<"form" | "verifying" >("form"); 

    async function SubmitHandler (payload){
        try{
            setLoading(true);
            setError(null);
            await SignUp.create(payload);
            await SignUp.prepareEmailAddressVerification(
                { strategy : "email_code" }
            );
            setStep("verifying");
            ServerLog("Membuat Akun", "SubmitHandler");
        }catch(err){
            setError(err.error?.[0]?.longMessage || "Sesuatu yang salah terjadi");
            ServerLog('gagal Membuat Akun', "SubmitHandlerError");
        }finally{
            setLoading(false);
            console.log(payload)
        }
    }
    async function VerifyEmailHandler(code : string){
        try{
            setLoading(true)
            const result = await EmailVerify(SignUp, code)
            if(result.status === "complete"){
                await setActive({session: result.createdSessionId})
                router.push('/')
            }
        }catch(err){
            ServerLog(err.error?.[0]?.longMessage + " | Kesalahan Verifikasi Email" || "Kesalaha Verifikasi Email", "VerifyEmailHandlerError");
            setError("Terjadi Kesalahan Pada Verifikasi Email")
        }finally{
            setLoading(false)
        }
    }

    return {Step, Loading, Error, SubmitHandler, VerifyEmailHandler}
}
