import { findCompaniesBySlugSearch } from "@/feature/companies/company.service";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } },
) {
    const { searchParams } = new URL(request.url);
    const { slug } = await params;
    const page = Math.max(1, Number(searchParams.get("page"))) ?? 1;
    const take = Math.max(1, Number(searchParams.get("take"))) ?? 1;
    const skip = (page - 1) * take;

    const res = await findCompaniesBySlugSearch(slug, take, skip, page);
    return NextResponse.json(res);
}
