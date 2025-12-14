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
    <div className="basis-full">
      <div className="w-full flex flex-col overflow-y-scroll items-center p-5 gap-5">
        <h2 className="capitalize md:text-4xl text-2xl px-3 py-1 bg-blue-400 rounded-full">Cari Ketegori {slug}</h2>
        <div className="bg-blue-400  mx-10 w-[50%]  h-14 overflow-hidden rounded-full flex flex-row items-center justify-start">
              <div className="w-10 h-10 flex justify-center items-center">
                  <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              
              <input type="text" className=" p-1 px-2 w-full h-full rounded-full focus:outline-0 focus:ring-0 border-0 "/>
          </div>

          <h2 className="self-start md:text-2xl text-lg text-blue-600 my-5">Hasil Pencarian : </h2>


      </div>
      <ListCardComponents MagangList={MagangRes} Path={slug}/>
    </div>
  )
}