import Link from "next/link"
import truncate from "@/utils/Truncate"

type Column<T> = {
  key: keyof T
  label: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
}


type DashboardListProps<T>= {
    Head : Column<T>[],
    Items : T[],
    Path? : string
}

type WithId = {
  id: string | number
}

export default function DashboardList<T extends WithId>({Head,Items,Path}: DashboardListProps<T>) {
    return(
        <div className="md:overflow-x-auto overflow-x-scroll bg-white shadow w-full transform-gpu will-change-transform">
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {Head.map((TH,i) => (
                            <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{TH.label}</th>
                        ))}
                        <th scope="col" className="relative px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                {Items && (

                
                <tbody className="bg-white divide-y divide-gray-200 overflow-x-scroll w-full ">
                    {/* Daftar */}
                    {Items.map((row,i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors w-full overflow-x-scroll">
                            {Head.map((col,i) => (
                                <td key={i} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                    {col.render ? col.render(row[col.key], row) : truncate(String(row[col.key]),15)}
                                </td>
                            ))}
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex flex-row gap-5 items-baseline justify-between">
                                {Path ? <Link href={`/detail/${Path}/${row.id}`}>Detail</Link> : null}
                                <Link href={`/dashboard/update/${Path}/${row.id}`} className="text-gray-400 hover:text-gray-600 text-center">Edit</Link>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
                )}
            </table>
        </div>
    )
}