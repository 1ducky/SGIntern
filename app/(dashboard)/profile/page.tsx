

import { currentUser } from "@clerk/nextjs/server"

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { PersonalizeForm } from "./PersonalisasiForm";

interface Props {
    id? : string | null,
    email? : string | null,
    name? : string | null,
    jurusan? : string | null,
    keahlian? : string | null,
    kelamin? : string | null,
    pendidikan? : string | null,
    kelas? : string | null,
    link? : string | null,
    role? : string | null
}


export default async function SettingsPage ()  {

    // Mengambil Dara Penting Promise

    const user = await currentUser()
    
    if (!user) {
        redirect("/sign-in");
    }

    const authData = {
        image : user?.imageUrl,
        username : user?.username,
        fullname : user?.fullName,
        email : user?.emailAddresses[0].emailAddress
    }

    
    const db= await prisma.user.findUnique(
        {where:{email:user?.emailAddresses[0].emailAddress}}
    )
    const MethodReq= await db ? "PATCH" : "POST"
    const userData : Props = await db || {}


    return(
        <>
            <div className="flex flex-col items-center">
                {!user ? 'loading...' : (
                    <PersonalizeForm MethodReq={MethodReq} UserData={userData} authData={authData}/>
                )}

            </div>
        </>
    )
}