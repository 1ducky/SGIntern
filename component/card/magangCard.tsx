
import { Card } from "./Card";
import { Badge } from "../global/badge";

import Image from "next/image";

import { LinkButton } from "../global/linkButton";
import truncate from "@/utils/Truncate";

// Job Card Component
export const MagangCard = ({ magang }) => {

    const fetchImage =
        magang.perusahaan.imageUrl && magang.perusahaan.imageUrl.includes("|")
            ? magang.perusahaan.imageUrl.split("|")[0]
            : '/vercel.svg'

    return(
        <Card className="p-6 cursor-pointer hover:border-blue-500 border-2 border-transparent">
            <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{magang.name || 'Tidak Ada Nama'}</h3>
                <p className="text-gray-600 font-medium mb-3">{magang.perusahaan?.name || 'Tidak Ada Nama Perusahaan'}</p>
            </div>
            <div className="w-12 h-12 relative">
                <Image src={fetchImage} alt={magang.name || 'Tidak Ada Nama'} fill loading="lazy" className=" rounded-lg object-cover" />
            </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="primary">{magang.jurusan || 'Tidak Ada Jurusan'}</Badge>
            <Badge variant="success">{magang.keahlian || 'Tidak Ada Keahlian'}</Badge>
            </div>
            
            <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 text-sm">
                {/* <MapPin className="w-4 h-4 mr-2" /> */}
                {truncate(magang.perusahaan?.alamat || 'Tidak Ada Alamat',40)}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
                {/* <MapPin className="w-4 h-4 mr-2" /> */}
                {truncate(magang.deskripsi || 'Tidak Ada Alamat',40)}
            </div>

            </div>
            
            <LinkButton linkProp={`/detail/lowongan/${magang.id}/${encodeURIComponent(magang.name.replace(/ /g,'-'))}`}>
            Lihat Detail
            </LinkButton>
        </Card>
    );
}