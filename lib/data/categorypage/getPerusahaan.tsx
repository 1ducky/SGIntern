import repositoryPerusahaan from "@/lib/repository/getPerusahaan.repository"

export default function getPerusahaanCategoryPage() {
    return repositoryPerusahaan({
        limit: 6,
        order:[
            {field : 'createAt', value : 'desc'}
        ]
    })
}