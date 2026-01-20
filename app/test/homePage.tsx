

import { JobFeature } from "@/component/homePage/jobFeature";
import { companies } from "./dummyData";

import { Section } from "@/component/homePage/section";
import { CompanyFeature } from "@/component/homePage/companyFeature";
import { MagangFeature } from "@/component/homePage/magangFeature";


export default async function HomePage () {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const res = await fetch(`${baseUrl}/api/list/lowongan?order[createAt]=desc&limit=6`, {
        next:{revalidate:60}
    })

    const {data} = await res.json()


    return (
        <>

            <div className="min-h-screen bg-gray-50">

                <Section/>
                <JobFeature jobs={data}/>
                <MagangFeature magangs={data}/>
                <CompanyFeature companies={companies}/>
                
            </div>
        </>
    )
}

