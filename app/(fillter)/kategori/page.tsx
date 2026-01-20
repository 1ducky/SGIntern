
import { HorizontalLoader } from "@/component/global/HorizontalLoader"
import {CategoryFeature} from "@/component/kategori/categoryFeature"
import { CompanyFeatureCategoryPage } from "@/component/kategori/companiesFeature"
import { MagangFeatureCategoryPage } from "@/component/kategori/magangFeature"
import getMagangCategoryPage from "@/lib/data/categorypage/getMagang"
import getPerusahaanCategoryPage from "@/lib/data/categorypage/getPerusahaan"
import { GetApiResponse, MagangRow, PerusahaanRow } from "@/lib/types/apitypes"

import { Suspense, use } from "react"


export default function DetailPage () {
  const PerusahaanList = getPerusahaanCategoryPage()
  const MagangList = getMagangCategoryPage()

    return (
        <div className="basis-full min-h-screen bg-white">
            <CategoryFeature/>
            

            <Suspense fallback={<HorizontalLoader className="max-w-xl min-w-md mx-auto p-5 my-10" message="Memuat Daftar Perusahaan"/>}>
              <PerusahaanDisplay promise={PerusahaanList}/>
            </Suspense>

            <Suspense fallback={<HorizontalLoader className="max-w-xl min-w-md mx-auto p-5 my-20" message="Memuat Daftar Magang"/>}>
              <MagangDisplay promise={MagangList}/>
            </Suspense>

        </div>
    )
}

function MagangDisplay({promise} : {promise: Promise<GetApiResponse<MagangRow[]>>}) {

  const {data} = use(promise)

  return(
    <>
      <MagangFeatureCategoryPage magangs={data}/>
    </>
  )
}

function PerusahaanDisplay({promise} : {promise: Promise<GetApiResponse<PerusahaanRow[]>>}) {

  const {data} = use(promise)

  return(
    <>
      <CompanyFeatureCategoryPage companies={data}/>
    </>
  )
}