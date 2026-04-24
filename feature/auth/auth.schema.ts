import z from "zod";

export const authLoginSchema = z.object({
    email:z.string().email('Email tidak valid'),
    password:z.string().min(6,'Password minimal 6 karakter')
})

export type authLoginInput = z.infer<typeof authLoginSchema>

export type RefreshCallBack  ={
    user : {
        email : string
        id : string
        name : string
        refreshToken : string
        refreshTokenExpiry : string
        role : string
        tokenVersion : number
    }
    
}