import repositoryPerusahaan from "@/lib/repository/getPerusahaan.repository"

export default function getPerusahaanHomePage() {
    return repositoryPerusahaan({
        limit: 6,
        order:[
            {field : 'createAt', value : 'asc'}
        ]
    })
}