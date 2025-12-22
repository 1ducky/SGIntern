export const FormConfig = {
    "magang" : ["name","deskripsi","jurusan","keahlian","perusahaanId"],
    "lowongan" : ["name","deskripsi","jurusan","keahlian","perusahaanId"],
    "perusahaan" : ["name","deskripsi","alamat","imageUrl"]
} as const

export const FieldMeta = {

  name: { label: "Nama", type: "text" },
  deskripsi: { label: "Deskripsi", type: "textarea" },
  jurusan: { label: "Jurusan", type: "select" },
  keahlian: { label: "Keahlian", type: "select" },
  perusahaanId: { label: "Perusahaan", type: "selectid" },
  alamat: { label: "Alamat", type: "text" },
  imageUrl: { label: "Gambar", type: "image" },

} as const;

export type FormType = keyof typeof FormConfig

export type FieldKey<T extends FormType> = (typeof FormConfig)[T][number]