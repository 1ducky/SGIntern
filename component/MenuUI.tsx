'use client'


import Link from "next/link"
import { SideBar } from "./Sidebar"
import { useState } from "react"
import { useUser,useClerk } from "@clerk/nextjs"
import Image from "next/image"

// Deklarasi Type
interface MenuState {
    SideBar : boolean
    UserMenu : boolean
}

type MenuKey = keyof MenuState

export const MenuUi = () => {
    // State
    const [State,setState] = useState<MenuState>({
        'SideBar' : false,
        'UserMenu' : false
        }
    )

    // StateHandler
    function StateHandler (Param : MenuKey) {
        setState(prev => ({
            ...prev,
            [Param] : !State[Param]
            
        }))
    }

    const {isSignedIn,user} = useUser()
    const {signOut} = useClerk()
    return(
        <>
            <div className="fixed top-0 left-0 flex flex-row justify-between w-screen h-20 p-5 px-10 bg-blue-800 z-40 text-white">
                <div className="flex flex-row gap-5 flex-nowrap items-center">
                    <button onClick={() => StateHandler('SideBar')} className="w-10 h-10 bg-blue-700 rounded-full text-center block xl:hidden"><i className="fa-solid fa-bars"></i></button>
                    <Link href={'/'} className="w-36 h-full relative">
                        <Image src={'/logo.webp'} alt="logo" fill className="absolute top-0 left-0" decoding="async" preload={true} quality={75}/>
                    </Link>
                </div>

                

                <div className="flex justify-end mx-5 items-center flex-1 lg:gap-3 ">
                    {/* Page Menu */}
                    <ul className=" flex-row gap-2 hidden xl:flex">
                        <li><Link  className="text-xl pr-10" href={'/'} prefetch={false}><i className="fa-solid fa-house"></i> Beranda</Link></li>
                        <li><Link  className="text-xl pr-10" href={'/kategori'} prefetch={false}><i className="fa-solid fa-filter"></i> Kategori</Link></li>
                        <li><Link  className="text-xl pr-10" href={'/kategori/perusahaan'} prefetch={false}><i className="fa-solid fa-handshake"></i> PartnerShip</Link></li>
                    </ul>
                    
                    {/* Condition Render */}
                    {isSignedIn ? (
                        <>
                            <button onClick={() => StateHandler('UserMenu')} className="w-10 h-10 bg-blue-700 rounded-full relative overflow-hidden">
                                <Image 
                                    src={user.imageUrl} 
                                    alt="Profile"
                                    fill
                                />

                            </button>
                            <ul className={` absolute right-5 top-24 bg-blue-700 flex flex-col overflow-hidden rounded-2xl ${State.UserMenu ? 'block' : 'hidden'}`}>

                                <p  className="text-lg p-3 pr-8 pl-2 border-b-red-200 bg-transparent transition-colors"><i className="fa-solid fa-user"></i> Hai {user.username}</p>
                                {/* <Link href={'/'} className="text-lg p-3 hover:bg-blue-500 bg-transparent transition-colors"><i className="fa-solid fa-volume-high"></i> Pemberitahuan</Link> */}
                                <Link href={'/profile'} className="text-lg p-3 pr-8 pl-2 hover:bg-blue-500 bg-transparent transition-colors"><i className="fa-solid fa-gear"></i> Profile</Link>
                                <button onClick={() => signOut()} className="text-lg text-start p-3 pr-8 pl-2 hover:bg-blue-500 bg-transparent transition-colors"><i className="fa-solid fa-arrow-right-from-bracket"></i> Log-Out</button>
                            </ul>
                        </>
                    ): (
                        <Link href={'/sign-in'} className="px-3 py-2 bg-blue-700 rounded-full">
                            Masuk <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </Link>
                    )}

                </div>
                

            </div>
            
            {/* SideBar */}
            <SideBar Condition={State.SideBar}/>
            
        </>
    )
}