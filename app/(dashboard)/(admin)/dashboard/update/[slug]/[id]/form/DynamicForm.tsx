'use client'
import { notFound } from "next/navigation"
import Image from "next/image"
import { FormType,FormConfig,FieldMeta } from "@/Form.config"
import { useRef, useState } from "react"

import { jurusanText,keahlihan } from "@/StatisData/StatisObj"
import UpdateEntries from "@/app/action/UpdateEntries"
import { useRouter } from "next/navigation"

type DB ={
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

type DynamicFormProps = {
    type : FormType | undefined
    defaultValue? : DB
    id : string
}

type JurusanType = typeof jurusanText[number] | null
type JurusanLiteral = typeof jurusanText[number]

function isJurusanType(value: unknown): value is JurusanLiteral {
  return jurusanText.includes(value as JurusanLiteral);
}

function safeString(value: unknown): string {
  return value == null ? "" : String(value)
}




function TextInput({ field,type,label,defaultvalue} : { field: string, type: string, label : string, defaultvalue: string }) {
    return (
        <>
            <label className="text-lg" htmlFor={field}>{label}</label>
            <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type={type} name={field} id={field} placeholder={`Harap masukan ${field} ${type} yang benar`}  required defaultValue={defaultvalue ? defaultvalue : ''}/>
        </>
    )
}
function FieldText({ field,type,label,defaultvalue }: { field: string, type: string, label : string, defaultvalue: string | null | undefined }) {
    return (
        <>
            <label className="text-lg" htmlFor={field}>{label}</label>
            <textarea name={field} id={field} placeholder={`Masukan ${type} ${field}`} className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 " defaultValue={defaultvalue? defaultvalue : ''}/>
        </>
    )
}

function ImageInput ({ImageUrl} : {ImageUrl? : string | null}) {
    const fileRef = useRef<HTMLInputElement>(null)
    return(
        <>
            <div className="w-60 h-60 bg-blue-700 rounded-full relative overflow-hidden flex flex-col self-center md:self-start justify-center my-10">
                <div className="absolute bottom-1/2 right-1/2 translate-1/2 text-white hover:text-black p-10 text-md" onClick={() => fileRef.current?.click()}>
                    <i className="fa-regular fa-camera"></i>
                </div>
                {ImageUrl && (
                    <Image
                    src={ImageUrl ?? ""}
                    alt="Profile"
                    fill
                    sizes="100px"
                    quality={75}
                />
                )}
                
                <input type="file" accept="image/*" ref={fileRef} className="hidden"/>
                <input type="text" name="imageUrl" className="hidden"/>
            </div>
        </>
    )
}

type SelectInputProps =
  | {
      field: string
      kind : 'jurusan'
      label: string
      jurusan: null
      default: JurusanLiteral | null
      onChange: (value: JurusanType) => void
    }
  | {
      field: string
      kind : 'keahlian'
      label: string
      jurusan: JurusanType | null
      default: string | null
      onChange?: never
    }

function SelectInput ({ field,label,kind, jurusan, onChange }: SelectInputProps) {

    const data = field === 'jurusan'
      ? jurusanText
      : jurusan
        ? Object.values(keahlihan[jurusan]).map(value => value.nama)
        : []
    return(
        <>
            <label htmlFor={field} className="text-lg capitalize">{label}</label>
            <select 
                name={field} 
                id={field} className=" focus:outline-0 focus:ring-0 border-0 bg-blue-600 hover:bg-blue-300 text-white p-2 py-1 text-start" 
                defaultValue="default" 
                disabled={field === 'keahlian' && !jurusan}
                onChange={(e) => {
                if (kind === 'jurusan') {
                        onChange(e.target.value as JurusanType)
                    }
                }}
            > 
            <option value="" disabled hidden>
                Pilih {label}
            </option>
                {data.map((List,i) => (
                    <option key={i} value={List}>{List}</option>
                    ))
                }
            </select>
        </>
    )
    
        
}


export default function DynamicUpdateForm ({type,defaultValue,id} : DynamicFormProps) {
    const [Jurusan, setJurusan] = useState<JurusanType | null>(isJurusanType(defaultValue?.jurusan) ? defaultValue.jurusan : null)
    const router = useRouter()

    if (!type) return notFound()
    


    const fields = FormConfig[type] 

    async function onSubmitDatas(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
            const formData = new FormData(e.currentTarget);

            const data = Object.fromEntries(formData) 
            console.log(data)
            const res = await UpdateEntries(type,data,id)
            const {status, message} = await res

            if(status == 200) router.replace(`/dashboard/${type}`)
            else return window.alert(message)
        
    }

    return(
        <form 
             className="flex flex-col justify-start gap-3 flex-1"
             onSubmit={(e) => onSubmitDatas(e)}
        >
            <ul className="flex flex-col justify-start gap-3 flex-1">
                {fields.map ((field,i) => {
                    const Meta = FieldMeta[field]

                    switch(Meta.type) {
                        case 'image':
                            return (
                                    <ImageInput key={i} />
                                
                                    )
                        case 'text':
                            return (
                                <li key={i} className="flex flex-col flex-1">
                                    <TextInput field={field} defaultvalue={safeString(defaultValue?.[field] as string)} type={Meta.type} label={Meta.label}/>
                                </li>)
                        case 'select':
                            if (field === 'jurusan') {
                                return (
                                <SelectInput
                                    key={i}
                                    field={field}
                                    kind="jurusan"
                                    label={Meta.label}
                                    jurusan={null}
                                    default={isJurusanType(defaultValue?.jurusan) ? defaultValue.jurusan : null}
                                    onChange={
                                        (value) => {
                                            setJurusan(value as JurusanType)
                                        }
                                    }/>
                                )
                            }

                            if (field === 'keahlian') {
                                return (
                                <SelectInput
                                    key={i}
                                    field={field}
                                    kind="keahlian"
                                    label={Meta.label}
                                    jurusan={Jurusan}
                                    default={defaultValue?.keahlian || null}
                                />
                                )
                            }

                            return null
                        case 'selectid':
                            return <h2>id</h2>
                        case 'textarea':
                            return (
                                <li key={i} className="flex flex-col flex-1">
                                    <FieldText field={field} label={Meta.label} type={Meta.type} defaultvalue={safeString(defaultValue?.[field] as string) || null} />
                                </li>
                                )
                        default:
                            return null
                    }
                    })}
            </ul>
            

                
            
            
            <input type="submit" value="Simpan" className="px-3 py-2 bg-blue-600 hover:bg-blue-400 text-white rounded-full" />
        </form>
    )
    
}