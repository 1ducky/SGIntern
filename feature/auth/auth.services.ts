import { compare, hash } from "bcrypt";
import { authUserRepository } from "../users/user.repository";
import generateToken from "@/utils/utils-auth";
import { authLoginInput, RefreshCallBack} from "./auth.schema";
import { JWT } from "next-auth/jwt";
import { error } from "node:console";
import { ApiResponse } from "@/utils/response-api";


export async function authSignin(credentials: authLoginInput) {

    try{
        const user = await authUserRepository.getAuthUserByEmail(credentials.email)
        if(!user || await compare(credentials.password,user.password) == false){
            return null
        }
        // jangan return password ke client
        return { id: user.id, name: user.name, email: user.email, role: user.role, tokenVersion: user.tokenVersion}
    }catch(error){
        console.log(error)
        return null
    }
}

export async function generateRefreshToken(id:string, version: number) {
    const rawToken = generateToken()
    const hashToken = await hash(rawToken,10)
    const expiry = new Date(Date.now() + 7*24*60*60*1000) // 7 hari

    await authUserRepository.updateUserToken(id,version,hashToken,expiry)
    return {
        refreshToken : rawToken+'|+|'+id,
        expiry
    }
}

export async function authLogout(userId: string, version: number){
    try{
        await authUserRepository.updateAuthUserTokenLogout(userId,version)
        return {success:true}
    }catch(error){
        console.log(error)
        return {error: "Logout Failed"}
    }
}

export async function authRefresh(token:JWT): Promise<JWT> {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`, {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            credentials: "include"
        })

        const data : ApiResponse<RefreshCallBack> = await res.json()
        console.log('refreshed')
        if(!data.success){
            return {...token, error:'TokenInvalidated' as const}
        }
    
        const user = data.data.user
        return { 
            ...token,
            email: user.email,
            id: user.id,
            name: user.name,
            exp: Math.floor(Date.now() / 1000) + 15 + 60, // 15 menit
            role: user.role,
            version: user.tokenVersion
        }
    

    }catch(error){
        console.log(error)
        return {...token, error:'TokenInvalidated' as const}
    }
}

export async function authRefreshEndpoint(token: string, userId: string) {
    try{
        const user = await authUserRepository.getAuthUserByIdWithToken(userId)
        if(!user || !user.refreshToken){
            return {error: 'Invalid Token'}
        }
        if(new Date() > user.refreshTokenExpiry!){
            return {error: 'Token Expired'}
        }
        const isValid = await compare(token,user.refreshToken)
        if(!isValid){
            return {error: 'Invalid Token'}
        }
        return {user}
    }catch(error){
        console.log(error)
        return {error: 'Invalid Token'}
    }
}