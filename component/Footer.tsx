import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return(
         <footer className="bg-slate-900 text-white pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="space-y-4">
                <Link href="/" className="relative w-36 aspect-3/1 block">
                  <Image
                    src="/logo.webp"
                    alt="logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Platform digital resmi untuk memfasilitasi siswa dan alumni dalam meraih peluang karir di industri impian. Jembatan masa depan menuju kemandirian profesional.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Layanan Siswa</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>
                  <Link href="/kategori/magang" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Informasi Magang (Prakerin)
                  </Link>
                </li>
                <li>
                  <Link href="kategori/lowongan" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Lowongan Kerja Alumni
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Interview & CV
                  </Link>
                </li>
                <li>
                  <a href="mailto:bkk@smksunangirimenganti.sch.id" className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Konsultasi Karir
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Daftar Kemitraan</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>
                  <p  className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Perusahaan
                  </p>
                </li>
                <li>
                  <p  className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Perusahaan
                  </p>
                </li>
                <li>
                  <p  className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Perusahaan
                  </p>
                </li>
                <li>
                  <p  className="hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> Perusahaan
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Kontak Kami</h3>
              <div className="text-slate-400 text-sm space-y-4">
                <p className="flex items-start">
                  <span className="mr-3 text-blue-400">📍</span>
                  Jl. Raya Menganti, Gresik, Jawa Timur
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-400">📞</span>
                  +62 812 3456 7890
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-400">✉️</span>
                  bkk@smksunangirimenganti.sch.id
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
            <p>© 2024 BKK SMK Sunan Giri Menganti. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    )
}