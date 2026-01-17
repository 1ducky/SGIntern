
import { CompanyCard } from "../card/companyCard"
import Link from "next/link"

export const CompanyFeature = ({companies}) => {
    return(
        <>
            {/* Top Companies Section */}
            <section id="companies" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Mitra Terpercaya</h2>
                    <p className="text-gray-600">Bergabunglah dengan perusahaan-perusahaan terkemuka</p>
                    </div>
                    <Link href={'/'}  className="hidden md:block">
                    Jelajahi Perusahaan
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {companies.map(company => (
                    <CompanyCard key={company.id} company={company} />
                    ))}
                </div>

                <div className="text-center mt-8 md:hidden">
                    <Link href={'/kategori/perusahaan'} prefetch={false}>Lihat Semua Perusahaan</Link>
                </div>
                </div>
            </section>
        </>
    )
}