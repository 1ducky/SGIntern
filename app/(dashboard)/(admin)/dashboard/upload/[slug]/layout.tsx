import ContextProvider from "@/utils/ContextProvider"

interface LayoutProps {
  children: React.ReactNode
  params: {
    slug: string
  }
}



export async function generateStaticParams() {
    const StaticParams =['magang','lowongan','perusahaan']
    return StaticParams.map( slug => ({slug : slug.toLowerCase()}))
}

export default async function UploadLayout({params,children} : LayoutProps) {
    const {slug} = await params

    if(!slug) return <>404</>

    const value = {temporal: slug}

    return(
        <>
            <div className="bg-white p-10">
                <h2 className="capitalize text-2xl">
                    Tambahkan Data {slug} Baru
                    <div className="flex flex-row flex-wrap">
                        <ContextProvider value={value}>
                            {children}
                        </ContextProvider>
                        
                    </div>
                    
                </h2>
                
            </div>
        </>
    )
}
