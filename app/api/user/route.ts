import prisma from "@/lib/db";
import { before } from "node:test";

// Helper function untuk response error
function ErrorResponse(message : string, status = 400) {
    return new Response(JSON.stringify({ error: message }), {
        status,
        headers: { "Content-Type": "application/json" }
    })
}

// Helper function untuk response success
function SuccessResponse<T>(data: T, status = 200) : Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" }
    })
}

export async function GET() {
    try {
        // Coba Mengambil User 
        const Users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                jurusan: true,
                keahlian: true,
                kelas: true,
                kelamin : true,
                pendidikan : true
            }
        })
        
        return SuccessResponse(Users)
    } catch (error) {
        // Handler Error
        console.log("GET /api/user error:", error)
        return ErrorResponse("Gagal Mengambil Data User", 500)
    }
}

//Pendaftaran Data User
export async function POST(request: Request) {
    const body = await request.json()
    const {name,email,jurusan,keahlian,kelamin,kelas,pendidikan} = body

    try{
        // VALIDASI FIELD WAJIB
        if ( !email || !name || !kelamin || !kelas) {
            return Response.json(
                { error: "name dan email wajib diisi",request: { name, email, jurusan, keahlian,  }},
                { status: 400 }
            );
        }
        //Pencegahan Duplikasi
        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return Response.json({
                message:'User Sudah Terdaftar',
                status: 409, 
                
            })
        }

        //Query Untuk Membuat Data User
        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                jurusan,
                keahlian,
                kelamin,
                kelas,
                pendidikan,
                
            }
        })
        return Response.json(
            {
                message:'Berhasil Di Daftarkan',
                status: 201, 
                newUser
            }
        )
    }catch{
        // Handler Error

        console.log("POST /api/user error:")
        return Response.json(
            {
                message: 'Gagal Membuat Akun',
            }, {status : 500}
        )
    }
}

export async function PATCH(request:Request) {
    const body = await request.json()
    const {name,email,jurusan,keahlian,kelamin,kelas,pendidikan} = body

    try{
        // VALIDASI FIELD WAJIB
        if ( !email || !name || !kelamin || !kelas) {
            return Response.json(
                { error: "name, dan email wajib diisi",request: { name, email, jurusan, keahlian,  }},
                
                { status: 400 }
            );
        }
        //Pencegahan Duplikasi
        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (!existingUser) {
            return ErrorResponse('User Tidak Ditemukan',404)
        }

        // pencegahan Query Update Tidak Perlu
        const Before =
            existingUser.name === name &&
            existingUser.jurusan === jurusan &&
            existingUser.keahlian === keahlian &&
            existingUser.kelamin === kelamin &&
            existingUser.kelas === kelas &&
            existingUser.pendidikan === pendidikan

        const isSame = JSON.stringify(Before) == JSON.stringify(body)

        if (isSame) {
            return Response.json(
                { message: "Tidak ada perubahan data" },
                { status: 400 }
            )
        }
        
        const updateUser = await prisma.user.update({
            where : {email},
            data:{
                name,
                email,
                jurusan,
                keahlian,
                kelamin,
                kelas,
                pendidikan,
            }
        })


        return Response.json(
            {message:`Data Telah DiUpdate, IsSame = ${isSame}`, data : existingUser, status: 201, updateUser}
        )
    }catch{
        // Handler Error
        console.log("PATCH /api/user error:")
        return ErrorResponse("Gagal Membuat User", 500)
    }
}

export async function DELETE(request:Request) {
    const body = await request.json()
    const {email}  = body

    //Pencegahan Query Tidak Perlu
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (!existingUser) {
        return Response.json(
            {
                message: 'User Tidak Ditemukan',
                iscache : existingUser ? 'anomali' : false
            }, {status : 404}
        )
    }

    try{

        await prisma.user.delete({where: {email}})

        return Response.json({
            message : 'User Berhasil Dihapus',
            status:200
        })
    }catch{
        console.log("PATCH /api/user error:")
        return Response.json(
            {
                message: 'Gagal menghapus Akun',
                iscache : existingUser ? 'anomali' : false
            }, {status : 500}
        )
    }
} 