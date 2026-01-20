import { Card } from "./Card";


import Image from "next/image";
import truncate from "@/utils/Truncate";
import { LinkButton } from "../global/linkButton";

// Company Card Component
export const CompanyCard = ({ company }) =>{
  const fetchImage =
        company.imageUrl && company.imageUrl.includes("|")
            ? company.imageUrl.split("|")[0]
            : '/vercel.svg'
  
  return (
    <Card className="p-6 text-center cursor-pointer hover:border-blue-500 border-2 border-transparent grid items-center">
      <div className="mb-4 flex justify-center">
          <div className="w-20 h-20 relative">
            <Image 
              src={fetchImage} 
              alt={company.name} 
              fill
              decoding="async" 
              priority={false} 
              sizes="96px"
              quality={75}
              className=" rounded-xl object-cover"
               />
          </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name || 'Tidak Ada Nama'}</h3>
      <p className="text-gray-600 text-sm mb-3">{truncate(company.deskripsi || 'Tidak Ada Deskripsi',30)}</p>
      <div className="flex items-center text-gray-600 text-sm">
          {/* <MapPin className="w-4 h-4 mr-2" /> */}
          {truncate(company.alamat || 'Tidak Ada Alamat',30)}
      </div>
      <LinkButton linkProp={`/detail/perusahaan/${company.id}/${encodeURIComponent(company.name.replace(/ /g,'-'))}`}>
      Lihat Detail
      </LinkButton>
    </Card>
  );
}