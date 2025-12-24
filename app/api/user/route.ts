import prisma from "@/lib/db";
import { NextResponse } from "next/server";


// Helper function untuk response error
function ErrorResponse(message : string, status = 400) {
    return new Response(JSON.stringify({ error: message }), {
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
            }
        })
        
        return NextResponse.json({status:200, Users})
    } catch (error) {
        // Handler Error
        console.log("GET /api/user error:", error)
        return ErrorResponse("Gagal Mengambil Data User", 500)
    }
}

//Pendaftaran Data User
export async function POST(request: Request) {
    const body = await request.json()
    const {name,email,jurusan,keahlian,kelamin,kelas,pendidikan,link,alamat} = body

    try{
        // VALIDASI FIELD WAJIB
        if ( !email || !name || !kelamin || !kelas || !alamat) {
            return NextResponse.json(
                { error: "name dan email wajib diisi",request: { name, email, jurusan, keahlian,  }},
                { status: 400 }
            );
        }
        //Pencegahan Duplikasi
        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return NextResponse.json({
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
                alamat,
                pendidikan,
                link
            }
        })
        return NextResponse.json(
            {
                message:'Berhasil Di Daftarkan',
                status: 201, 
                newUser
            }
        )
    }catch(error){
        // Handler Error

        console.log("POST /api/user error:")
        return NextResponse.json(
            {
                message: 'Gagal Membuat Akun',
                error: error instanceof Error ? error.message : error,
            }, {status : 500}
        )
    }
}

export async function PATCH(request:Request) {
    const body = await request.json()
    const {name,email,jurusan,keahlian,kelamin,kelas,pendidikan,link,alamat} = body

    try{
        // VALIDASI FIELD WAJIB
        if ( !email || !name || !kelamin || !kelas || !alamat) {
            return NextResponse.json(
                { error: "name, dan email wajib diisi",request: { name, email, jurusan, keahlian,  }},
                
                { status: 400 }
            );
        }
        //Pencegahan Duplikasi
        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (!existingUser) {

            return NextResponse.json(
                { message: 'User Tidak Ditemukan'},
                
                { status: 400 }
            );
        }

        // pencegahan Query Update Tidak Perlu
            

        const isSame = 
            existingUser.name === name &&
            existingUser.jurusan === jurusan &&
            existingUser.keahlian === keahlian &&
            existingUser.kelamin === kelamin &&
            existingUser.kelas === kelas &&
            existingUser.pendidikan === pendidikan &&
            existingUser.link === link  &&
            existingUser.alamat === alamat

        if (isSame) {
            return NextResponse.json(
                { message: "Tidak ada perubahan data"},
                
                { status: 400 }
            );
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
                link,
                alamat
            }
        })


        return NextResponse.json(
            {message:`Data Telah DiUpdate,`,  status: 204, updateUser}
        )
    }catch{
        // Handler Error
        console.log("PATCH /api/user error:")
        return NextResponse.json(
            {message:"Gagal Memperbarui User",  status: 500, }
        )
    }
}

export async function DELETE(request:Request) {
    const body = await request.json()
    const {email}  = body

    //Pencegahan Query Tidak Perlu
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (!existingUser) {
        return NextResponse.json(
            {
                message: 'User Tidak Ditemukan',
                iscache : existingUser ? 'anomali' : false
            }, {status : 404}
        )
    }

    try{

        await prisma.user.delete({where: {email}})

        return NextResponse.json({
            message : 'User Berhasil Dihapus',
            status:200
        })
    }catch{
        console.log("DELETE /api/user error:")
        return NextResponse.json(
            {
                message: 'Gagal menghapus Akun',
                iscache : existingUser ? 'anomali' : false
            }, {status : 500}
        )
    }
} 