import Link from "next/link";


export default function NotFoundPage (){
    return(
        <>
            <div className="w-full h-full p-5 flex flex-col justify-center items-center py-30">
                <div className=" h-full p-20 flex flex-col justify-center items-center gap-3 bg-white rounded-2xl">
                    <h2 className="text-3xl font-semibold text-center">Halaman Tidak Ditemukan <i className="fa-solid fa-file"></i></h2>
                    <div className=" flex flex-col justify-center items-center gap-2 ">
                        <h3>Kami Minta Maaf, Mungkin Halaman Tujuanmu Tidak Tersedia</h3>
                        <p className="self-start my-3 mb-1">Bagaimana Cara Memperbaikinya?</p>
                        <ol className="flex flex-col justify-start self-start gap-5 list-decimal list-outside" type="1">
                            <li>Cek Kata Kunci Ke Tujuan Mu</li>
                            <li>Mungkin Halaman Ini Sedang Dalam Pemeliharaan,Bisa Datang Lagi Lain Kali</li>
                            <li>Kontak Kami Jika Halaman ini Tidak Mempunyai Informasi Valid</li>
                        </ol>
                    </div>
                    <Link className="p-3 px-5 bg-blue-600  hover:bg-blue-300 transition-all duration-150 rounded-full my-5 text-white" href={'/'}>Kembali Ke Beranda</Link>
                </div>
                
                
            </div>
        </>
    )
}