import { compare, hash } from "bcrypt";
import { authUserRepository } from "../users/user.repository";
import generateToken from "@/utils/utils-auth";
import { authLoginInput} from "./auth.schema";

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

export async function generateRefreshToken(id:string) {
    const rawToken = generateToken()
    const hashToken = await hash(rawToken,10)
    const expiry = new Date(Date.now() + 7*24*60*60*1000) // 7 hari

    await authUserRepository.updateUserToken(id,hashToken,expiry)
    return {
        refreshToken : rawToken,
        expiry
    }
}

export async function authCompareRefreshToken(refreshToken:string,userId:string){
    const user = await authUserRepository.getAuthUserRefreshTokenById(userId)
    if(!user || !user.refreshToken ){
        return {error: 'Invalid'}
    }
    const isValid = await compare(refreshToken,user.refreshToken)
    if(!isValid){
        return {error: 'Mismatch'}
    }
    if(new Date() > user.refreshTokenExpiry!){
        return {error: 'Expired'}
    }
    return {success: true,id: user.id}
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