import NextAuth, {DefaultSession} from "next-auth"
import { JWT } from "next-auth/jwt"

// ubah field next-auth
declare module "next-auth"{
    interface Session{
        user : {
            role?: string
            id?: string
        } & DefaultSession['user']
    }
    interface User{
        id?:string
        role?:string
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        role?:string
        id?:string
    }
}