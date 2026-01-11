import { SignUpResource } from "@clerk/types";


export default async function CreateAccount(signUp : SignUpResource, payload){
    if(!signUp) return

    await signUp.create(payload);
    await signUp.prepareEmailAddressVerification(
        { strategy : "email_code" }
    );
    
}

export async function EmailVerify(SignUp : SignUpResource, code : string){ 
    return await SignUp.attemptEmailAddressVerification({code})
    
}