import Link from "next/link"



export default function SettingsLayout ({children }: Readonly<{children : React.ReactNode}>){
    return(
            <div className="w-screen h-screen flex flex-row flex-nowrap gap-5 justify-center my-10 px-5 py-10 overflow-x-hidden">
                <div className="bg-white basis-1/4 flex flex-col items-center py-10 px-10 gap-10">
                    <h2 className="text-2xl">Menu</h2>
                    <ul className="flex flex-col self-start gap-5 text-2xl basis-full w-full overflow-y-scroll">
                        <Link href={'#a'} className="px-2 py-1 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Personalisasi</Link>
                        <Link href={'#b'} className="px-2 py-1 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Informasi</Link>
                        <Link href={'#c'} className="px-2 py-1 bg-blue-50 hover:bg-blue-100 transition-all rounded-full ">Magang</Link>
                    </ul>
                </div>
                <div className="bg-white basis-4/6 overflow-y-scroll">
                    {children}
                </div>
            </div>
    )
}