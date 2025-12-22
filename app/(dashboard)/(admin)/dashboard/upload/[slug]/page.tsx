'use client'
import DynamicForm from "./form/DynamicUploadForm";
import { useContextUtils } from "@/utils/ContextProvider"
import { notFound } from "next/navigation"

const FORM_TYPES = ["magang", "lowongan", "perusahaan"] as const;
type FormType = typeof FORM_TYPES[number];

function isFormType(value: unknown): value is FormType {
  return FORM_TYPES.includes(value as FormType);
}


export default  function UploadPage() {

    const typeform = useContextUtils() 

    if (!typeform) return notFound()

    // const Upload  = async (Type : string) => {
    //     return alert('Upload')
    // }

    return(
        <>
            <div className="flex flex-col md:flex-row-reverse flex-wrap gap-5 w-full mt-10 px-10 justify-center md:justify-between">
                
                
                <DynamicForm type={isFormType(typeform.temporal) ? typeform.temporal : undefined} />
            </div>
        </>
    )
}