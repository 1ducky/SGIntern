import { hash } from "bcrypt"
import { userRepository } from "./user.repository"
import { RegisterSchema, UpdateUserSchema } from "./user.schema"
import { failed, ok } from "@/utils/response-api"


export async function createUser(data: unknown){
    const parsed  = await RegisterSchema.safeParse(data)
    if(!parsed.success){
        return failed(422,parsed.error.flatten().fieldErrors,'Invalid Field')
    }
    try {
        const exists = await userRepository.findUserByEmail(parsed.data.email)
        if(exists) {
            return failed(422,'EMAIL EXISTS','Email Sudah Digunakan')
        }
        parsed.data.password = await hash(parsed.data.password,8)
        const user = await userRepository.createUser(parsed.data)
        return ok(user,'Berhasil Registrasi')
    } catch (error) {
        console.log(error)
        return failed(500,'INTERNAL ERROR', 'kesalahan Internal')
    }
} 

export async function deleteUser(id:string) {
    const exists = await userRepository.findUserById(id)
    if(!exists){
        return failed(404,'USER NOT FOUND', 'User Tidak Ditemukan')
    }
    await userRepository.deleteUser(id)
    return ok(null,'User Berhasil Dihapus')
}

export async function putUpdateUser(data:unknown,id:string){
    const parsed = await UpdateUserSchema.safeParse(data)
    if(!parsed.success){
        return failed(422,parsed.error.flatten().fieldErrors,'Invalid Field')
    }
    const exists = await userRepository.findUserById(id)
    if(!exists) {
        return failed(404,'USER NOT FOUND', 'User Tidak Ditemukan')
    }
    try{
        const user = await userRepository.updateUser(parsed.data,id)
        return ok(user,'Behasil Update User')
    } catch (error) {
        console.log(error)
        return failed(500,'INTERNAL ERROR', 'kesalahan Internal')
    }

}

export async function getUsers(take:number,skip:number,page:number) {
    const users = await userRepository.getUsers(take,skip)

    if(users.total < 1) return failed(404,'USER NOT FOUND','Users Tidak Ditemukan')

    return ok({
        items: users.data,
        pagination: {
            page,
            take,
            total: users.total,
            totalPages: Math.ceil(users.total/take)
        }

    },'Berhasil Mendapatkan Daftar User')
}
export async function getUsersSearchName(take:number,skip:number,page:number,keyword:string) {
    const users = await userRepository.findUsersByNameSearch(take,skip,keyword)

    if(users.total < 1) return failed(404,'USER NOT FOUND','Users Tidak Ditemukan')

    return ok({
        items: users.data,
        keyword: keyword,
        pagination: {
            page,
            take,
            total: users.total,
            totalPages: Math.ceil(users.total/take)
        }

    },'Berhasil Mendapatkan Daftar User')
}