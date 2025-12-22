import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prisma from "@/lib/db";
import ContextProvider from "@/utils/ContextProvider";

import { Suspense } from "react";





export default async function SettingsLayout ({children }: Readonly<{children : React.ReactNode}>){
        const user = await currentUser()
    
    if (!user) {
        return redirect("/sign-in");
    }

    const authData = {
        image : user?.imageUrl,
        username : user?.username,
        fullname : user?.fullName,
        email : user?.emailAddresses[0].emailAddress
    }

    
    const db= await prisma.user.findUnique(
        {
            where:{email:user?.emailAddresses[0].emailAddress},
            select: {
                id: true,
                name: true,
                role: true,
                jurusan: true,
                keahlian: true,
                kelas: true,
                kelamin : true,
                pendidikan : true,
                link:true,
                alamat:true
            }
        }
    )
    const method = db ? 'PATCH' : 'POST'

    const Value = {
        clrek : authData,
        db:db,
        method: method
    }
    return(
        
            <div className=" flex flex-col lg:px-40 md:20 xl:px-52 px-10 my-5 py-5 overflow-x-hidden">
                <ul className=" self-start flex flex-row items-start p-2 gap-5">
                    <Link href={'#a'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Profile</Link>
                    <Link href={'#b'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Informasi</Link>
                    <Link href={'#c'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Magang</Link>
                </ul>
                <div className=" flex-1 ">
                    <Suspense fallback={'loading...'}>
                        <ContextProvider value={Value}>
                            {children}
                        </ContextProvider>
                    </Suspense>
                </div>
            </div>
        
            
    )
}