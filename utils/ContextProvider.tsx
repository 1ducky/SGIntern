'use client'
import { useContext,createContext } from "react"

type ContextParams = {
    clrek?:{
        image : string | null,
        username : string | null,
        fullname : string | null,
        email : string | null
    }
    db?:{
        id? : string | null,
        email? : string | null,
        name? : string | null,
        jurusan? : string | null,
        keahlian? : string | null,
        kelamin? : string | null,
        pendidikan? : string | null,
        kelas? : string | null,
        link? : string | null,
        role? : string | null,
        alamat? : string | null,
        imageUrl? : string | null
        deskripsi? : string | null
        perusahaanId? : string | null

    } | null
    method? : string
    temporal? : string 
    temp2? : {
        data1? : string
        data2? : string
        data3? : string
    }
    
}

const Context = createContext<ContextParams | null>(null)

export default function ContextProvider ({value,children} : {value : ContextParams, children : React.ReactNode }){
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useContextUtils= () => {
    const ctx = useContext(Context)
    if(!ctx) throw new Error('Children Harus Berada Di Dalam ContextProvider')
    return ctx
}