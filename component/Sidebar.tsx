
import Link from "next/link"

interface SideBarProp {
    Condition : boolean
}

export const SideBar = ({Condition} : SideBarProp) => {

    const CurrentDate = new Date()
    const CurrentYear = CurrentDate.getFullYear()

    return(
        <div className={`text-white fixed bg-indigo-900 w-9/12 xl:w-auto px-5 py-5 pb-5 h-screen flex flex-col justify-between z-39 transition-all duration-300 ${ Condition ? 'left-0' : '-left-full'}`}>
            <div className="self-start">
                <ul className="font-medium flex flex-col gap-2 px-5 pl-1">
                    <li><Link  className="text-2xl pr-10" href={'/'}><i className="fa-solid fa-house"></i> Beranda</Link></li>
                    <li><Link  className="text-2xl pr-10" href={'/Ketegori'}><i className="fa-solid fa-filter"></i> Kategori</Link></li>
                    <li><Link  className="text-2xl pr-10" href={'/Pencarian'}><i className="fa-solid fa-magnifying-glass"></i> Pencarian</Link></li>
                </ul>
                <div className="flex flex-col flex-nowrap">

                </div>
            </div>
            
            <footer className="text-center  mb-20 mx-auto">
                <h2 >SGIntern {CurrentYear}©</h2>
                <small className="">Bersama Kita Bisa</small>
            </footer>
        </div>

            
    )
}