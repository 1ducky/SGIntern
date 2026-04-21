import prisma from "@/lib/prisma";
import { CreateCompanyInput, UpdateCompanyInput } from "./company.schema";
// import { nanoid } from "nanoid";

// function generateUniqueSlug(name: string) {
//     const baseSlug = generateSlug(name);
//     const uniqueId = nanoid(6); // contoh: "aB3xYz"
//     return `${baseSlug}-${uniqueId}`;
// }
// list of truth source
export const companyRepository = {
    getCompanies,
    findCompanyById,
    findCompanyByName,
    findCompanyBySlug,
    findCompaniesBySlugSearch,
    createCompany,
    deleteCompany,
    updateCompany,
};

// Visibility Fields
const select = {
    id: true,
    name: true,
    slug: true,
    description: true,
    website: true,
    location: true,
    logo: true,
};

// async function generateUniqueSlug(name: string) {
//     let slug = generateSlug(name);
//     let count = 1;
//     while (await prisma.companies.findUnique({ where: { slug } })) {
//         slug = `${generateSlug(name)}-${count}`;
//         count++;
//     }
//     return slug;
// }

async function findCompanyBySlug(slug: string) {
    return await prisma.companies.findUnique({
        where: { slug },
        select: select,
    });
}

async function getCompanies(take: number, skip: number) {
    const [data, total] = await prisma.$transaction([
        prisma.companies.findMany({
            skip,
            take,
            select,
        }),
        prisma.companies.count(),
    ]);
    return { data, total };
}

async function findCompanyById(id: string) {
    return await prisma.companies.findUnique({
        where: { id },
        select: select,
    });
}

async function findCompanyByName(name: string) {
    return await prisma.companies.findUnique({
        where: { name: name },
        select: select,
    });
}

async function findCompaniesBySlugSearch(
    slug: string,
    take: number,
    skip: number,
) {
    const [data, total] = await prisma.$transaction([
        prisma.companies.findMany({
            where: {
                slug: slug,
            },
            skip,
            take,
            select: select,
        }),
        prisma.companies.count({
            where: {
                slug: slug,
            },
        }),
    ]);
    return { data, total };
}

async function createCompany(data: CreateCompanyInput, slug: string) {
    const company = await prisma.companies.create({
        data: {
            name: data.name,
            slug: slug,
            description: data.description,
            website: data.website,
            location: data.location,
            logo: data.logo,
        },
        select,
    });

    return company;
}

async function updateCompany(id: string, data: UpdateCompanyInput) {
    return await prisma.companies.update({
        where: { id },
        data: data,
        select,
    });
}

async function deleteCompany(id: string) {
    return await prisma.companies.delete({
        where: { id },
        select: select,
    });
}
