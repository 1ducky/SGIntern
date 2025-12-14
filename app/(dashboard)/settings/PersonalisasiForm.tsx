'use client'
import Image from "next/image"
import Link from "next/link"
import { DIsplayListText } from "@/component/DisplayListText"
import { useState,useRef,useEffect } from "react"

type ObjectKey = "link" | "pendidikan"

interface Props {
    UserData: {
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
    },
    authData : {
        image : string,
        username : string | null,
        fullname : string | null,
        email : string
    },
    MethodReq : string,

}


export const PersonalizeForm = ({authData,UserData,MethodReq} : Props) => {
    const user = authData
    const userData = UserData

    const linkRef = useRef<HTMLInputElement>(null)
    const pendidikanRef = useRef<HTMLInputElement>(null)


    // Initial Value
    const [ArratList, setArrayList] = useState<{
        link: string[]
        pendidikan: string[]
        }>(() => ({
        link: 
            userData.link?.trim()
            ? userData.link.split('+')
            : [],
        pendidikan: 
            userData.pendidikan?.trim()
            ? userData.pendidikan.split('+')
            : []
    }))



    const [isAdding,setisAdding] = useState<{
        link : boolean,
        pendidikan : boolean
    }>({
        link  : false,
        pendidikan : false
    })

    const [Draf,setDraf] = useState<{
        link :string | null,
        pendidikan : string | null
    }>(
        {
            link : null,
            pendidikan : null
        }
    )

    function Savedraf(key : ObjectKey , value : string | null) {
        setDraf( prev => ({
            ...prev,
            [key] : value
        }))
    }

    function HandlerAddList(key: ObjectKey) {
        setisAdding(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    function SaveValue(key : ObjectKey, value : string | null) {
        const cleaninput = value?.trim() || null
        if(!cleaninput){
            Savedraf(key,null)
            HandlerAddList(key)
            return
        }
        setArrayList(prev =>({
            ...prev,
            [key]: [...prev[key],value]
        }))
        Savedraf(key,null)
        HandlerAddList(key)
        console.log(ArratList)
    }

    function DeleteValue(key : ObjectKey , i : number){
        setArrayList(prev => ({
            ...prev,
            [key] : prev[key].filter((_,index) => index !== i)
        }))
    }

    useEffect(() => {
        if (isAdding.link) {
            linkRef.current?.focus()
        }

        if (isAdding.pendidikan) {
            pendidikanRef.current?.focus()
        }
    }, [isAdding])


     async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const data = {
        username: formData.get("nama"),
        jurusan: formData.get("jurusan"),
        keahlian: formData.get("keahlian"),
        kelas: formData.get("kelas"),
        alamat: formData.get("alamat"),
        }
        try{
            const res = await fetch("/api/user", {
            method: MethodReq, //POST | PATCH
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    name : data.username,
                    email : user?.email ,
                    jurusan : data.jurusan,
                    keahlian : data.keahlian,
                    kelamin : 'laki-laki',
                    kelas: data.kelas,
                    pendidikan:"",
                    link:""
                }
            ),
            })
            console.log(res)
        }catch{
            console.log('Error 500 Internal Error')
        }
        
    }
    return (
        <form className="self-start" onSubmit={handleSubmit}>
            <div className="self-start flex flex-row items-center flex-nowrap gap-5 text-4xl text-center">
                <div className="w-32 h-32 bg-blue-700 rounded-full relative overflow-hidden">
                    <Image
                        src={user?.image ?? ""}
                        alt="Profile"
                        fill
                    />
                    <div className="absolute bottom-3 right-3 text-white text-md">
                        <i className="fa-regular fa-camera"></i>
                    </div>

                </div>
                <div className="flex flex-col justify-start">
                    <h2 className="">Selamat Datang {userData.name || user?.username || user?.fullname || 'Loading'}</h2>
                    <h3 className="text-2xl text-start">{user?.email}</h3>
                    <h3 className="text-2xl text-start">{userData.role || ''}</h3>

                </div>
            </div>

            <div className="flex flex-col self-start gap-3">
                <label className="text-lg" htmlFor="nama">Nama Lengkap</label>
                <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="nama" id="nama" placeholder="Harap Masukan Nama Lengkap Yang benar" defaultValue={`${userData.name || ''}`} required />

                <label className="text-lg" htmlFor="kelas">Kelas</label>
                <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="kelas" id="kelas" placeholder="Harap Masukan Kelas Yang benar" defaultValue={`${userData.kelas || ''}`} required />
                
                <label className="text-lg" htmlFor="jurusan">Jurusan</label>
                <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="jurusan" id="jurusan" placeholder="Harap Masukan Jurusan Yang benar" defaultValue={`${userData.jurusan || ''}`} required />

                <label className="text-lg" htmlFor="Keahlihan">Keahlihan</label>
                <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="keahlian" id="keahlian" placeholder="Harap Masukan Keahlihan Yang benar" defaultValue={`${userData.keahlian || ''}`} required />

                <label className="text-lg" htmlFor="alamat">Alamat</label>
                <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="alamat" id="alamat" placeholder="Harap Masukan Alamat Yang benar" required />

                <label className="text-lg" htmlFor=""><i className="fa-solid fa-paperclip"></i> Kaitkan Link Pencapaian,Portofolio, atau Medsos</label>
                <ul className="flex flex-col gap-2">
                    <DIsplayListText Data={ArratList.link} objkey="link" onDelete={DeleteValue}/>

                    {/* Conditional Render Input */}
                    {
                        isAdding.link ? (
                            <input 
                                type="text"  className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full focus:outline-0 focus:ring-0 border-0"
                                
                                onBlur={() => SaveValue("link",Draf.link)}
                                onKeyDown={(e) => e.key === "Enter" && SaveValue('link',Draf.link)}
                                ref={linkRef}

                                onChange={(e) => Savedraf('link',e.target.value)} 
                                required/>
                        ) : <></>
                    }
                    
                </ul>
                <div onClick={() => HandlerAddList("link")} className="w-10 h-10 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-full">
                    <i className="fa-solid fa-plus text-center"></i>
                </div>

                <label className="text-lg" htmlFor=""><i className="fa-solid fa-school"></i> Masukan Riwayat Pendidikan </label>
                <ul className="flex flex-col gap-2">
                    <DIsplayListText Data={ArratList.pendidikan} objkey='pendidikan' onDelete={DeleteValue}/>
                    {/* Conditional Render Input */}
                    {
                        isAdding.pendidikan ? (
                            <input 
                                type="text"  className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full focus:outline-0 focus:ring-0 border-0"
                                
                                onBlur={() => SaveValue('pendidikan',Draf.pendidikan)}
                                onKeyDown={(e) => e.key === "Enter" && SaveValue('pendidikan',Draf.pendidikan)}
                                ref={pendidikanRef}
                                
                                onChange={(e) => Savedraf('pendidikan',e.target.value)} 
                                required/>
                        ) : <></>
                    }
                </ul>
                <div className="w-10 h-10 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-full" onClick={() => HandlerAddList('pendidikan')}>
                    <i className="fa-solid fa-plus text-center"></i>
                </div>

                <h2 className="text-lg"><i className="fa-solid fa-image"></i> Upload Gambar Pencapaian, Karya, atau Pengalaman </h2>
                <div className="overflow-x-scroll md:w-1/2">
                    <ul className="flex flex-row-reverse grow justify-end gap-2">
                        <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                            <i className=" fa-solid fa-plus text-center"></i>
                        </li>
                        <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                        </li>
                    </ul>
                </div>

            </div>
            <div className="flex flex-row-reverse justify-between my-5">
                <input type="submit" value="Simpan" className="px-3 py-2 bg-blue-600 hover:bg-blue-400 text-white rounded-full" />

                <Link href={`/statis/cv/${userData.id}`} className="text-blue-600 hover:text-blue-300 self-start">Lihat CV Kamu</Link>
            </div>
            

        </form>
    )
}