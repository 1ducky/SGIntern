'use client'
import { EmailVerifyForm } from "@/component/auth/EmailVerifyForm"

export default function testpage() {
    return(
        <>
            <EmailVerifyForm
                OnSubmitVerify={(e) => {
                    e.preventDefault()
                    console.log(e)}
                }
                Error={''} 
                Loading={false}
            />
        </>
    )
}