import { compare } from "bcrypt";
import { authUserRepository } from "../users/user.repository";

export default async function authSigin({email,password}:{email:string,password:string}) {
    const user = await authUserRepository.getAuthUserByEmail(email)
    if(!user || await compare(password,user.password) == false){
        return null
    }
    // jangan return password ke client
    return { id: user.id, name: user.name, email: user.email, role: user.role}
}