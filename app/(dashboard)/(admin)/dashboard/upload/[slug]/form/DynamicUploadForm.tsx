'use client'
import { notFound } from "next/navigation"
import { FormType,FormConfig,FieldMeta } from "@/Form.config"
import { useEffect, useState } from "react"

import { jurusanText,keahlihan } from "@/StatisData/StatisObj"
import UploadEntries from "@/app/action/UploadEntries"
import { useRouter } from "next/navigation"
import CustomUploader from "@/component/ImageUploader"


type DynamicFormProps = {
    type : FormType | undefined
    onSubmitAction? : (data: Record<string,string>) => void 
}

type JurusanType = typeof jurusanText[number] | null
type Company = {
    id: string
    name: string
}

function IDSearch () {
    

    const [query, setQuery] = useState('')
    const [companies, setCompanies] = useState<Company[]>([])
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

    useEffect(() => {
        if (query.length < 2) return

        
        fetch(`/api/perusahaan?q=${query}`)
            .then(res => res.json())
            .then(data => setCompanies(Array.isArray(data?.Perusahaan) ? data.Perusahaan : []))
        }, [query])
    
    return(
        <>  
            <label className="text-lg" htmlFor='query'>Perusahaan</label>
            <input
                type="text"
                value={selectedCompany?.name ?? query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    setSelectedCompany(null) // reset kalau ngetik lagi
                }}
                placeholder="Ketik nama perusahaan..."
                className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0"
                id="query"
             />
             {companies.length > 0 && !selectedCompany && (
                <ul className="border mt-1 max-h-40 overflow-auto rounded-2xl">
                    {companies.map((company) => (
                    <li
                        key={company.id}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                        setSelectedCompany(company)
                        setQuery('')
                        setCompanies([])
                        }}
                    >
                        {company.name}
                    </li>
                    ))}
                </ul>
                )}
            <input
            type="hidden"
            name="perusahaanId"
            value={selectedCompany?.id ?? ''}
            />
        </>
    )
}



function TextInput({ field,type,label }: { field: string, type: string, label : string }) {
    return (
        <>
            <label className="text-lg" htmlFor={field}>{label}</label>
            <input className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0" type={type} name={field} id={field} placeholder={`Harap masukan ${field} ${type} yang benar`}  required />
        </>
    )
}
function FieldText({ field,type,label }: { field: string, type: string, label : string }) {
    return (
        <>
            <label className="text-lg" htmlFor={field}>{label}</label>
            <textarea name={field} id={field} placeholder={`Masukan ${type} ${field}`} className="text-lg bg-gray-100 p-3 rounded-4xl focus:outline-0 focus:ring-0 border-0 " />
        </>
    )
}



type SelectInputProps =
  | {
      field: string
      kind : 'jurusan'
      label: string
      jurusan: null
      onChange: (value: JurusanType) => void
    }
  | {
      field: string
      kind : 'keahlian'
      label: string
      jurusan: JurusanType | null
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
            <div className="py-1 px-2 bg-gray-100 rounded-2xl">
                <select 
                    name={field} 
                    id={field} className="w-full focus:outline-0 focus:ring-0 border-0 text-xl p-2 py-1 text-start" 
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
            </div>
        </>
    )
    
        
}


export default function DynamicForm ({type} : DynamicFormProps) {
    const [Jurusan, setJurusan] = useState<JurusanType | null>(null)
    const [isBusy,setisBusy] = useState<boolean>(false)
    const router = useRouter()

    if (!type) return notFound()
    


    const fields = FormConfig[type] 

    async function onSubmitDatas(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData) 
            // console.log(data)
            const res = await UploadEntries(type,data)
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
                                <li key={i} className="flex flex-col flex-1">
                                    <CustomUploader setCondition={setisBusy}/>
                                </li>
                                )
                        case 'text':
                            return (
                                <li key={i} className="flex flex-col flex-1">
                                    <TextInput field={field} type={Meta.type} label={Meta.label}/>
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
                                />
                                )
                            }

                            return null
                        case 'selectid':
                            return( 
                                <li key={i} className="flex flex-col flex-1">
                                    <IDSearch/>
                                </li>
                            )
                        case 'textarea':
                            return (
                                <li key={i} className="flex flex-col flex-1">
                                    <FieldText field={field} label={Meta.label} type={Meta.type}/>
                                </li>
                                )
                        default:
                            return null
                    }
                    })}
            </ul>
            <div className="w-full justify-end flex flex-col-reverse md:flex-row self-end text-white text-xl gap-5">
                <input type="submit"value={isBusy ? 'Uploading' : `Simpan`}  className={`px-3 py-2 ${isBusy ? 'bg-blue-600' : 'bg-blue-400'} hover:bg-blue-200 text-white rounded-full`}  disabled={isBusy}/>
            </div>
        </form>
    )
    
}