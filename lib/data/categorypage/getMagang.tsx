import repositoryMagang from "@/lib/repository/getMagang.repository";

export default function getMagangCategoryPage() {
    return repositoryMagang({
        limit: 6,
        order:[
            {field : 'createAt', value : 'desc'},
            
        ]
    })
}