
import Link from "next/link"

interface SideBarProp {
    Condition : boolean
}

export const SideBar = ({Condition} : SideBarProp) => {


    return(
        <div className={`text-white fixed bg-indigo-900 h-20 xl:h-auto xl:-top-40 px-5 py-5 w-screen flex z-39 transition-all duration-300 ${ Condition ? 'top-0' : 'top-20'}`}>

                <ul className="w-full flex flex-row justify-between gap-2">
                    <li><Link  className="text-lg " href={'/'} prefetch={false}><i className="fa-solid fa-house"></i> Beranda</Link></li>
                    <li><Link  className="text-lg " href={'/kategori'} prefetch={false}><i className="fa-solid fa-filter"></i> Kategori</Link></li>
                    <li><Link  className="text-lg " href={'/kategori/perusahaan'} prefetch={false}><i className="fa-solid fa-magnifying-glass"></i>Mitra</Link></li>
                </ul>

            

        </div>

            
    )
}