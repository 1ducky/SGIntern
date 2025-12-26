type Itemtype = {

    imageUrl? : string
    perusahaan? : {id:string, alamat:string, name:string, imageUrl?: string} | string
    alamat? : string
    name: string
}

export function isPerusahaanObject(
  perusahaan: Itemtype["perusahaan"]
): perusahaan is { id: string; alamat: string; name: string; imageUrl?: string } {
  return typeof perusahaan === "object" && perusahaan !== null;
}
