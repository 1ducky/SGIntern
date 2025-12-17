import Link from "next/link"



export default function SettingsLayout ({children }: Readonly<{children : React.ReactNode}>){
    return(
            <div className=" flex flex-col  px-10 my-5 py-5 overflow-x-hidden">
                <ul className=" self-start flex flex-row items-start p-2 gap-5">
                    <Link href={'#a'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Profile</Link>
                    <Link href={'#b'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Informasi</Link>
                    <Link href={'#c'} className="px-5 py-3 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Magang</Link>
                </ul>
                <div className=" flex-1">
                    {children}
                </div>
            </div>
    )
}