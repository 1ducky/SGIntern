
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import prisma from "@/lib/db";
import { redirect } from "next/navigation";



export default async function SettingsPage ()  {

    // Mengambil Dara Penting Promise
    const { userId } = await auth();
    const user = await currentUser()

    
    if (!user) {
        redirect("/sign-in");
    }

    const db= await prisma.user.findUnique(
        {where:{email:user?.emailAddresses[0].emailAddress}}
    )
    const {id,email,name,jurusan,keahlian,kelamin,pendidikan,kelas,link,role} = await db || {}
        // const email = user?.emailAddresses
        // async function SubmitHandler(e) {
        //     e.preventDefault()
            
        //     const formData = new FormData(e.target)
        //     const res = await SubmitPersonalize(formData,email)
        //     console.log(res)
            
        // }
    return(
        <>
            <form className="flex flex-col items-center pl-10 gap-5 py-5">
                {!userId ? 'loading...' : (
                    <>

                        <div className="self-start flex flex-row items-center flex-nowrap gap-5 text-4xl text-center">
                            <div className="w-32 h-32 bg-blue-700 rounded-full relative overflow-hidden">
                                <Image
                                    src={user?.imageUrl ?? ""}
                                    alt="Profile"
                                    fill
                                />

                            </div>
                            <div className="flex flex-col justify-start">
                                <h2 className="">Selamat Datang {name || user?.username || user?.fullName || 'Loading'}</h2>
                                <h3 className="text-2xl text-start">{user?.emailAddresses[0].emailAddress}</h3>
                            </div>
                        </div>

                        <div className="flex flex-col self-start gap-3">
                            <label className="text-lg" htmlFor="nama">Nama Lengkap</label>
                            <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="nama" id="nama" placeholder="Harap Masukan Nama Lengkap Yang benar" required />

                            <label className="text-lg" htmlFor="jurusan">Jurusan</label>
                            <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="jurusan" id="jurusan" placeholder="Harap Masukan Jurusan Yang benar" required />

                            <label className="text-lg" htmlFor="Keahlihan">Keahlihan</label>
                            <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="keahlian" id="keahlian" placeholder="Harap Masukan Keahlihan Yang benar" required />

                            <label className="text-lg" htmlFor="alamat">Alamat</label>
                            <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 w-lg" type="text" name="alamat" id="alamat" placeholder="Harap Masukan Alamat Yang benar" required />

                            <label className="text-lg" htmlFor=""><i className="fa-solid fa-paperclip"></i> Kaitkan Link Pencapaian,Portofolio, atau Medsos</label>
                            <ul className="flex flex-col gap-2">
                                <a href="" className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full">Portofolio</a>
                                <a href="" className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full">Portofolio</a>
                                <a href="" className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full">Portofolio</a>
                            </ul>
                            <div className="w-10 h-10 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-full">
                                <i className="fa-solid fa-plus text-center"></i>
                            </div>

                            <label className="text-lg" htmlFor=""><i className="fa-solid fa-school"></i> Masukan Riwayat Pendidikan </label>
                            <ul className="flex flex-col gap-2">
                                <a href="" className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full">SDN Fiktif</a>
                                <a href="" className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full">SMP Fiktif</a>
                                <a href="" className="px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full">SMK Fiktif</a>
                            </ul>
                            <div className="w-10 h-10 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-full">
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
                                    <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                                    </li>
                                    <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                                    </li>
                                    <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                                    </li>
                                    <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                                    </li>
                                    <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                                    </li>
                                    <li className="shrink-0 w-20 h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-200 flex flex-col items-center justify-center rounded-2xl">
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <input type="submit" value="Simpan" className="px-3 py-2 bg-blue-600 hover:bg-blue-400 text-white rounded-full" />

                        <Link href={'/statis/cv/user'} className="text-blue-600 hover:text-blue-300 self-start">Lihat CV Kamu</Link>

                    </>
                )}

            </form>
        </>
    )
}