import NextAuth, {DefaultSession} from "next-auth"
import { JWT } from "next-auth/jwt"

// ubah field next-auth
declare module "next-auth"{
    interface Session{
        error? : string
        user : {
            role?: string
            id?: string
            tokenVersion?: number
        } & DefaultSession['user']
    }
    interface User{
        id?:string
        role?:string
        tokenVersion?:number
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        role?:string
        id?:string
        version?: number
        exp?: number
        error? :string
    }
}