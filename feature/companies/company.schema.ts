import zod from "zod";

export const CreateCompanySchema = zod.object({
    name: zod
        .string()
        .min(3, "Nama Perusahaan Terlalu Pendek")
        .nonoptional("Name Wajib Diisi"),
    description: zod
        .string()
        .min(10, "Deskripsi Perusahaan Terlalu Pendek")
        .nonoptional("Description Wajib Diisi"),
    website: zod
        .string()
        .url("URL Tidak Valid")
        .nonoptional("Website Wajib Diisi"),
    location: zod
        .string()
        .min(3, "Lokasi Perusahaan Terlalu Pendek")
        .nonoptional("Location Wajib Diisi"),
    logo: zod
        .string()
        .url("URL Logo Tidak Valid")
        .nonoptional("Logo Wajib Diisi"),
});

export type CreateCompanyInput = zod.infer<typeof CreateCompanySchema>;

export const UpdateCompanySchema = zod.object({
    name: zod.string().min(3, "Nama Perusahaan Terlalu Pendek").optional(),
    description: zod
        .string()
        .min(10, "Deskripsi Perusahaan Terlalu Pendek")
        .optional(),
    website: zod.string().url("URL Tidak Valid").optional(),
    location: zod
        .string()
        .min(3, "Lokasi Perusahaan Terlalu Pendek")
        .optional(),
    logo: zod.string().url("URL Logo Tidak Valid").optional(),
});

export type UpdateCompanyInput = zod.infer<typeof UpdateCompanySchema>;
