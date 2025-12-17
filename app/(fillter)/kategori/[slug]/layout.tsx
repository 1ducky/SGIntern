import { jurusan, kategori, kelamin } from "@/StatisData/StatisObj"

type Props = {
  params: {
    slug: string
  },
  children : React.ReactNode

}

export default async function KategoriLayout({params,children} : Props){
    const {slug} = await params 

    const KategoriList = kategori
    const JurusanList = jurusan
    const KelaminList = kelamin
    const KeahlihanList = ['Keahlihan','Keahlihan','Keahlihan']

    return (
        <div className="flex md:flex-row flex-col text-white">
            <div className="fixed xl:h-screen flex flex-col flex-nowrap gap-2 px-4 py-5 pb-8 bg-blue-500 xl:w-1/6 lg:w-1/4 md:w-1/2 w-3/4 z-10">
                <div className="">{slug}</div>
                <label htmlFor="lang-pref" className="text-lg"><i className="fa-solid fa-filter"></i> Kategori</label>
                <select name="lang-pref" id="lang-pref" defaultValue={slug} className=" focus:outline-0 focus:ring-0 border-0 bg-blue-600 hover:bg-blue-300 text-white p-2 py-1 text-start">
                    {KategoriList.map((List,i) => (
                        <option key={i} value={List.path.toLowerCase()}>{List.path.toLowerCase()}</option>
                        ))
                    }
                </select>
                <label htmlFor="filter-pref" className="text-lg"><i className="fa-solid fa-wrench"></i> Keahlihan</label>
                <select name="filter-pref" id="filter-pref" defaultValue={'keahlihan'} className=" focus:outline-0 focus:ring-0 border-0 bg-blue-600 hover:bg-blue-300 text-white p-2 py-1 text-start">
                    {KeahlihanList.map((List,i) => (
                        <option key={i} value={List.toLowerCase()}>{List}</option>
                        ))
                    }
                </select>
                <label htmlFor="filter-pref" className="text-lg"><i className="fa-solid fa-gears"></i> Jurusan</label>
                <select name="filter-pref" id="filter-pref" defaultValue={'jurusan'} className=" focus:outline-0 focus:ring-0 border-0 bg-blue-600 hover:bg-blue-300 text-white p-2 py-1 text-start">
                    {JurusanList.map((List,i) => (
                        <option key={i} value={List.path.toLowerCase()}>{List.path}</option>
                        ))
                    }
                </select>
                <label htmlFor="filter-pref" className="text-lg"><i className="fa-solid fa-user"></i> Kelamain</label>
                <select name="filter-pref" id="filter-pref" defaultValue={'kelamin'} className=" focus:outline-0 focus:ring-0 border-0 bg-blue-600 hover:bg-blue-300 text-white p-2 py-1 text-start">
                    {KelaminList.map((List,i) => (
                        <option key={i} value={List.toLowerCase()}>{List}</option>
                        ))
                    }
                </select>

                
            </div>
            <div className="xl:w-1/6 mx-5 lg:block hidden">{slug}</div>
            {children}
        </div>
    )
}