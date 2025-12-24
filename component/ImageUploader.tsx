"use client"

import { useUploadThing } from "@/lib/uploadthing-client"
import { deleteImage } from "@/app/action/DeleteImage"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function CustomUploader({defaultUrl,setCondition}:{defaultUrl? : string | null,setCondition : React.Dispatch<React.SetStateAction<boolean>>}) {
    // defaultUrl exemple = "https://cdn.com/name|key"
    const [file, setFile] = useState<File | null>(null)
    const [imageUrl,setimageUrl] = useState<string | null>(defaultUrl ? defaultUrl : null)
    const [isUpload,setisUpload] = useState<boolean>(!imageUrl ? true : false) //'true : upload, false : update'
    const [isProcess, setisProcess] = useState<boolean>(false)

    useEffect(() => {


        setCondition(isProcess)
    },[isProcess,setCondition])

    const fileRef = useRef<HTMLInputElement>(null)
    

    const { startUpload, isUploading } = useUploadThing(
        "imageUploader",
        {
        onClientUploadComplete: (res) => {
            const imageclient = `${res[0].ufsUrl}|${res[0].key}`
            setimageUrl(imageclient)
            console.log(imageclient)
            console.log(imageUrl);
        },
        onUploadError: (err) => {
            alert(err.message);
        },
        }
    )

    async function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
        setisProcess(true)
        const preview = e.target.files?.[0]
        setFile(preview ?? null)
        if(!preview) {
            setisProcess(false)
            return alert('Tidak ada Gambar')
        }

        try{
            if(isUpload) {

                await startUpload([preview]) 
                console.log('do Upload')
                setisUpload(false)
            }else{
                console.log('deleting image')
                const key = imageUrl ? imageUrl.split('|')[1] : null
                await deleteImage(key)
                await startUpload([preview])
            }
        }catch{
            alert('Gagal Memproses Gambar')
        }finally{
            setisProcess(false)
        }
        
        
    }

    const previewUrl =
    file
      ? URL.createObjectURL(file)
      : imageUrl
      ? imageUrl.split("|")[0]
      : ''

    return (
        <>
        
            <div className="w-48 h-48 rounded-full border-4 bg-blue-700 border-white overflow-hidden mb-8 shadow-lg relative">
                <input
                    type="file"
                    accept="image/*"
                    onChange={onChangeImage}
                    ref={fileRef}
                    disabled={isUploading}
                    className="hidden"
                />
                {file && (
                <Image src={previewUrl} alt="preview" sizes="100px" quality={80} fill className="absolute"/>
                )}
                <button className="absolute bottom-1/2 right-1/2 translate-1/2 text-blue-300 hover:text-blue-100 font-medium p-10 text-md flex flex-col items-center"  onClick={() => fileRef.current?.click()} disabled={isUploading}>
                    <i className="fa-regular fa-camera text-center"></i>
                    <h3 className="text-center">{isUploading || isProcess ? "Uploading..." : "Upload"}</h3>
                </button>
            </div>
            {/* fallback value */}
            <input type="text" name="imageUrl" id="imageUrl" value={imageUrl || ''} className="hidden"/>
        
        </>
    );
}
