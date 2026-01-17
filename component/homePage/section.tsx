import Image from "next/image"

export const Section = () => {
    return(
        <>
            <section className="relative bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 opacity-40">
                    <Image 
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" 
                        alt="JobStreet - Platform Pencarian Kerja Terbaik di Indonesia untuk Lowongan Pekerjaan dan Karir Profesional"
                        className="w-full h-full object-cover"
                        itemProp="image"
                        fill
                    />
                </div>

                {/* More Detail */}
                <div className="container mx-auto px-4 relative z-10">
                    {/* Heading (SEO) */}
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Temukan Karir Impian Anda
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Ribuan magang dan lowongan pekerjaan dari perusahaan terkemuka menanti Anda
                        </p>
                    </div>

                    {/* Menus */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl font-bold mb-1">50K+</div>
                            <div className="text-blue-100 text-sm">Lowongan Aktif</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl font-bold mb-1">10K+</div>
                            <div className="text-blue-100 text-sm">Perusahaan</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl font-bold mb-1">2M+</div>
                            <div className="text-blue-100 text-sm">Pencari Kerja</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-3xl font-bold mb-1">98%</div>
                            <div className="text-blue-100 text-sm">Kepuasan User</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}