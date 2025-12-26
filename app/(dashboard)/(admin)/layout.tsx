import prisma from "@/lib/db";
import ContextProvider from "@/utils/ContextProvider";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";



export default async function DashboardLayout({children} : {children : React.ReactNode}){
    const user = await currentUser()
    
    if (!user) {
        redirect("/");
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
            select:{
                role:true,
                name:true,
                id:true
            }
        }
    )
    if (db?.role.toLowerCase() !== 'admin') return redirect("/")

    const Value = {
        clrek : authData,
        db:db
    }

    return(
        <div className=" flex flex-col px-10 my-5 py-5 overflow-x-hidden">  
            <ul className="w-full self-start flex flex-row items-start gap-3 sm:gap-7 overflow-x-auto rounded-t-2xl">
                <Link prefetch={false} href={'/dashboard'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-t-2xl ">Dashboard</Link>
                <Link prefetch={false} href={'/dashboard/magang'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-t-2xl ">Magang</Link>
                <Link prefetch={false} href={'/dashboard/lowongan'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-t-2xl ">Lowongan</Link>
                <Link prefetch={false} href={'/dashboard/perusahaan'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-t-2xl ">Perusahaan</Link>
            </ul>
            <div className="flex-1">
                <ContextProvider value={Value}> 
                    {children}
                </ContextProvider>
            </div>
        </div>
    )
}