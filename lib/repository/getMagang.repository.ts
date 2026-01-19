import { GetApiResponse, MagangRow } from "../types/apitypes"


type order = {
    field : string
    value : string
}

export default async function repositoryMagang (
    param:{
        limit? : number,
        offset? : number,
        query? : string,
        order? : order[]
    }
) : Promise<GetApiResponse<MagangRow[]>> {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const qs = new URLSearchParams()

    param.limit && qs.set('limit',String(param.limit))
    param.offset && qs.set('offset',String(param.offset))
    param.query && qs.set('query',String(param.query))


    param.order?.forEach((obj) => {
        qs.append(`order[${obj.field}]`,obj.value)
    })
    const res = await fetch(
        `${baseUrl}/api/list/magang?${qs.toString()}`,
        {next:{revalidate:60}}
    )
    const data = await res.json()
    return data
}