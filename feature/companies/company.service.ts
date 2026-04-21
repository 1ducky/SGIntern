import { CreateCompanySchema, UpdateCompanySchema } from "./company.schema";
import { companyRepository } from "./company.repository";
import { failed, ok } from "@/utils/response-api";

// Slug generate
function generateSlug(text: string) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
}

export async function createCompany(data: unknown) {
    const parsed = await CreateCompanySchema.safeParse(data);
    if (!parsed.success) {
        return failed(422, parsed.error.flatten().fieldErrors, "Invalid Field");
    }
    try {
        const exists = await companyRepository.findCompanyByName(
            parsed.data.name,
        );
        if (exists) {
            return failed(
                422,
                "NAME EXISTS",
                "Nama Perusahaan Sudah Digunakan",
            );
        }
        const slug = generateSlug(parsed.data.name);
        const slugExists = await companyRepository.findCompanyBySlug(slug);
        if (slugExists) {
            return failed(422, "SLUG EXISTS", "Slug sudah digunakan");
        }
        const company = await companyRepository.createCompany(
            parsed.data,
            slug,
        );
        return ok(company, "Berhasil Membuat Perusahaan");
    } catch (error) {
        console.log(error);
        return failed(500, "INTERNAL ERROR", "kesalahan Internal");
    }
}

export async function deleteCompany(id: string) {
    const exists = await companyRepository.findCompanyById(id);
    if (!exists) {
        return failed(404, "COMPANY NOT FOUND", "Perusahaan Tidak Ditemukan");
    }
    try {
        await companyRepository.deleteCompany(id);
        return ok(null, "Berhasil Menghapus Perusahaan");
    } catch (error) {
        console.log(error);
        return failed(500, "INTERNAL ERROR", "kesalahan Internal");
    }
}

export async function updateCompany(data: unknown, id: string) {
    const parsed = await UpdateCompanySchema.safeParse(data);
    if (!parsed.success) {
        return failed(422, parsed.error.flatten().fieldErrors, "Invalid Field");
    }
    const exists = await companyRepository.findCompanyById(id);
    if (!exists) {
        return failed(404, "COMPANY NOT FOUND", "Perusahaan Tidak Ditemukan");
    }
    try {
        const company = await companyRepository.updateCompany(id, parsed.data);
        return ok(company, "Berhasil Update Perusahaan");
    } catch (error) {
        console.log(error);
        return failed(500, "INTERNAL ERROR", "kesalahan Internal");
    }
}

export async function getCompanies(take: number, skip: number, page: number) {
    const companies = await companyRepository.getCompanies(take, skip);
    if (companies.total < 1)
        return failed(404, "COMPANY NOT FOUND", "Perusahaan Tidak Ditemukan");
    return ok(
        {
            items: companies.data,
            pagination: {
                page,
                take,
                total: companies.total,
                totalPages: Math.ceil(companies.total / take),
            },
        },
        "Berhasil Mendapatkan Daftar Perusahaan",
    );
}

export async function findCompaniesBySlugSearch(
    slug: string,
    take: number,
    skip: number,
    page: number,
) {
    const companies = await companyRepository.findCompaniesBySlugSearch(
        slug,
        take,
        skip,
    );
    if (companies.total < 1)
        return failed(404, "COMPANY NOT FOUND", "Perusahaan Tidak Ditemukan");
    return ok(
        {
            items: companies.data,
            pagination: {
                page,
                take,
                total: companies.total,
                totalPages: Math.ceil(companies.total / take),
            },
        },
        "Berhasil Mendapatkan Daftar Perusahaan",
    );
}
