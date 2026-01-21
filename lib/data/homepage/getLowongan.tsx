import repositoryLowongan from "@/lib/repository/getLowongan.repository";

export default function getLowonganHomePage() {
    return repositoryLowongan({
        limit: 6,
        order:[
            {field : 'createAt', value : 'desc'}
        ]
    })
}