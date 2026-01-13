

import { useRef, useState } from "react";


export default function EmailVerifyFormold({OnSubmitVerify,Error,Loading}) {

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

export function EmailVerifyForm({OnSubmitVerify,Error,Loading}) {
    const [code, setCode] = useState<string[]>(Array(6).fill(""));

    const verifyCode = code.join("")
    const isDisabled = verifyCode.length !== 6

    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    // handleChanges
    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            // autoFocus next index
            inputsRef.current[index + 1]?.focus();
        }
    };

    // handle backspace
    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
        // autoFocus past index
        inputsRef.current[index - 1]?.focus();
        }
    };

    // handle Paste
    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").slice(0, 6);

        if (!/^\d+$/.test(pasted)) return;

        setCode(pasted.split(""));
    };


    return(
        <>
            <div className="w-full max-w-xl min-w-md p-5 my-40 md:mb-72 bg-white mx-auto rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-envelope w-8 h-8 text-3xl text-white"></i>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Verifikasi Email</h2>
                    <p className="text-gray-600">Masukkan kode 6 digit yang telah dikirim ke</p>
                    <p className="text-blue-600 font-semibold mt-1">
                    </p>
                </div>
                {Error && <p className="text-red-600 text-sm">{Error}</p>}
                {/* <StatusMessage /> */}

                <form onSubmit={OnSubmitVerify} className="space-y-6">
                    <div className="flex justify-center gap-3">
                    {code.map((digit, index) => (
                        <input
                        key={index}
                        id={`code-${index}`}
                        ref={(e) => {inputsRef.current[index] = e}}
                        // disabled={index !== 0 && code[index - 2] === ""}
                        type="text"
                        inputMode="numeric"
                        max="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target.value,index)}
                        onKeyDown={(e) => handleKeyDown(e,index)}
                        onPaste={handlePaste}
                        className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                    ))}
                    <input type="text" name="code" id="code" value={code.join("")} readOnly className="hidden"/>
                    </div>

                    <button
                    type="submit"
                    disabled={Loading || isDisabled}
                    className="w-full py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    {Loading ? 'Memverifikasi...' : 'Verifikasi'}
                    </button>

                    <div className="text-center">
                    <p className="text-gray-600 text-sm mb-3">Tidak menerima kode?</p>
                    <button
                        type="button"
                        // onClick={() => handleStatusMessage('info', 'Kode verifikasi baru telah dikirim!')}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                        Kirim ulang kode
                    </button>
                    </div>
                </form>
                </div>
        </>
    )


}