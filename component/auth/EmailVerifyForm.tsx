

export default function EmailVerifyForm({OnSubmitVerify,Error,Loading}) {

    return(
        <>
            <form onSubmit={OnSubmitVerify}>

                <div className="flex flex-col gap-3 w-lg bg-blue-200 p-10 py-16 rounded-4xl justify-between">
                <h2 className="text-3xl font-bold self-center text-orange-400">Verifikasi Email</h2>
                {Error && <p className="text-red-600 text-sm">{Error}</p>}
                <label className="text-lg" htmlFor="code">Masukan Kode Verifikasi</label>
                <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type="text" name="code" id="code" placeholder="Masukan Kode Verifikasi" required />
                <button className={` hover:bg-blue-400 ${Loading ? 'bg-blue-300' : 'bg-blue-600'} duration-150 transition-all p-5 py-3 rounded-full text-white font-medium text-2xl`}>{Loading ? 'Memproses' : 'Verifikasi'}</button>
                </div>
        </form>
        </>
    )
}