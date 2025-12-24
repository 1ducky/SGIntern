'use client'

import CustomUploader from "@/component/ImageUploader"
import { useState } from "react"

export default function Test () {
    const [Busy,setBusy] = useState<boolean>(false)
    return(
        <>  
            <h1>Test</h1>
            <h2>{Busy ? 'proses' : 'luang'}</h2>
            <CustomUploader setCondition={setBusy}/>
        </>
    )
}