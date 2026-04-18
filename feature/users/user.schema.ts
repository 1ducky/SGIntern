import z from "zod";

export const RegisterSchema = z.object({
    email: z.string().email('Email Tidak Valid').nonoptional('Email Wajib Diisi'),
    name: z.string().min(3,'Nama Terlalu Pendek').nonoptional('Nama Wajib Diisi'),
    password: z.string().min(6,'Password Terlalu Pendek').max(60,'Password Terlalu Panjang').nonoptional('Password Wajib Diisi'),
})

export type RegisterInput = z.infer<typeof RegisterSchema>

export const UpdateUserSchema = z.object({
    email: z.string().email('Email Tidak Valid'),
    name: z.string().min(3,'Nama Terlalu Pendek'),

})

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>