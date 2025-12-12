'use client'

import { useState } from "react"


interface NontificationProp {
    Message : string
    Status : boolean
}

export const Nontification = ({Message,Status} : NontificationProp) => {

    const [Open,setOpen] = useState(Status)
    function Buttonhandler()  {
        setOpen(false)
    }
    return (
        <div className={`absolute ${Open ? 'top-24':'top-[-100vh]'} bg-blue-500 p-5 rounded-4xl text-white flex flex-col gap-5 w-md transition-all`}>
            <h2>Pesan:</h2>
            <p className="bg-white text-blue-500 p-3 rounded-4xl">
                {Message}
            </p>
            <button onClick={() => Buttonhandler()} className="self-end bg-white p-3 rounded-full text-blue-600">Mengerti</button>
        </div>
    )
}