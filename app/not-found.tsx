import Link from "next/link";


export default function NotFoundPage (){
    return(
        <>
            <div className="w-full h-full p-5 flex flex-col justify-center items-center gap-3 mt-30">
                <h2 className="text-3xl font-semibold text-center">Halaman Tidak Ditemukan <i className="fa-solid fa-file"></i></h2>
                <div className=" flex flex-col justify-center items-center gap-2 ">
                    <h3>Kami Minta Maaf, Mungkin Halaman Tujuanmu Tidak Tersedia</h3>
                    <p className="self-start my-3 mb-1">Bagaimana Cara Memperbaikinya?</p>
                    <ul className="flex flex-col justify-start self-start gap-2">
                        <li>1.Cek Kata Kunci Ke Tujuan Mu</li>
                        <li>2.Mungkin Halaman Ini Sedang Dalam Pemeliharaan,Bisa Datang Lagi Lain Kali</li>
                        <li>3.Kontak Kami Jika Halaman ini Tidak Mempunyai Informasi Valid</li>
                    </ul>
                </div>
                <Link className="p-1 px-2 bg-blue-700 rounded-full my-5" href={'/'}>Back To HomePage</Link>
                
            </div>
        </>
    )
}