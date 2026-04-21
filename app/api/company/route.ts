import {
    createCompany,
    getCompanies,
    updateCompany,
} from "@/feature/companies/company.service";
import { failed, ok } from "@/utils/response-api";
import parseBody from "@/utils/utils-api";
import { getToken, JWT } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, Number(searchParams.get("page"))) ?? 1;
    const take = Math.max(1, Number(searchParams.get("take"))) ?? 1;
    const skip = (page - 1) * take;

    const res = await getCompanies(take, skip, page);
    return NextResponse.json(res);
}

export async function POST(request: NextRequest) {
    const data = await parseBody(request);
    const company = await createCompany(data);
    // tambahkan fitur auto login jika berhasil
    return NextResponse.json(company);
}

export async function PUT(request: NextRequest) {
    const token: JWT | null = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token)
        return NextResponse.json(
            failed(401, "UNAUTHENTICATED", "Anda Belum Login"),
        );
    const data = await parseBody(request);
    const company = await updateCompany(data, token?.id as string);

    return NextResponse.json(company);
}
