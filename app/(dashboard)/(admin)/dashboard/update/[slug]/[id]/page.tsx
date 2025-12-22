'use client'

import { useContextUtils } from "@/utils/ContextProvider"
import DynamicUpdateForm from "./form/DynamicForm"
import { notFound } from "next/navigation";

const FORM_TYPES = ["magang", "lowongan", "perusahaan"] as const;
type FormType = typeof FORM_TYPES[number];

function isFormType(value: unknown): value is FormType {
  return FORM_TYPES.includes(value as FormType);
}

export default function UpdatePage () {
    const params = useContextUtils()
    console.log(params.db)

    if(!params.temp2?.data2) return notFound()

    return(
        <>
            <DynamicUpdateForm type={isFormType(params.temp2?.data1) ? params.temp2.data1 : undefined} defaultValue={params.db} id={params.temp2?.data2}/>
        </>
    )
}