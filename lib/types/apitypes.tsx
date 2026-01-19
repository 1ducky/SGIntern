export type GetApiResponse<T> ={
    data : T
    total : number
}

export type LowonganRow = {
    id: string
    name: string
    jurusan: string
    keahlian: string
    deskripsi: string
    perusahaan: {
        name:string
        alamat:string
    }
}

export type MagangRow = {
    id: string
    name: string
    jurusan: string
    keahlian: string
    deskripsi : string
    perusahaan: {
        name:string
        alamat:string
    }
}

export type PerusahaanRow = {
    id: string
    name: string
    deskripsi: string
    alamat: string
    imageUrl : string
}