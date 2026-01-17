
import { JobCard } from "../card/jobCard"
import Link from "next/link"

export const JobFeature = ({jobs}) => {
    return(
        <>
            {/* Featured Jobs Section */}
            <section id="jobs" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Lowongan Terbaru</h2>
                    <p className="text-gray-600">Temukan pekerjaan yang sesuai dengan keahlian Anda</p>
                    </div>
                    <Link prefetch={false} href={'/kategori/lowongan'} className="hidden md:block">
                    Lihat Semua
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                    ))}
                </div>

                <div className="text-center mt-8 md:hidden">
                    <Link prefetch={false} href={'/'}>Lihat Semua Lowongan</Link>
                </div>
                </div>
            </section>
        </>
    )
}