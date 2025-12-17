import { ListCardComponents } from "@/component/card/ListCard";




type Props = {
  params: {
    slug: string
  }
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const StaticParams =['pekerjaan','magang','perusahaan']
    return StaticParams.map( slug => ({slug : slug.toLowerCase()}))
}

export async function generateMetadata( {params} : Props ){
    const {slug} = await params
    const clean = slug.toLowerCase()
    
    return {
        title: `${clean.replace(/-/g,' ')}`,
        description:`Cari Berbagai ${clean} di SGIntern` ,
        openGraph:{
            title: `${clean.replace(/-/g,' ')}`,
            description:`Cari Berbagai ${clean} di SGIntern` ,
            url: "https://sgintern.com",
            type:"website"
        }
    }
}


export default async function KategoriPage ( {params} : Props ) {
  const {slug} = await params

  const MagangRes =[
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
    {
      Title :'Magang',
      Image : 'url',
      Perusahaan : 'Perusahaan',
      Alamat : 'alamt'
    },
  ]

  return (
    <div className="basis-full overflow-y-scroll">
      <div className="w-full flex flex-col items-center p-5 gap-5">
        <h2 className="self-start md:text-2xl text-lg text-blue-600 my-5">Hasil Ketegori {slug}: </h2>


      </div>
      <ListCardComponents DataList={MagangRes} Path={slug}/>
    </div>
  )
}