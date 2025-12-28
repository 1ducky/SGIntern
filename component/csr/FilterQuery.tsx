"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function FilterQuery({
  defaultfilter,
  jurusanText,
}: {
  defaultfilter?: string
  jurusanText: readonly string[]
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set("jurusan", value)
    } else {
      params.delete("jurusan")
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <select
      name="jurusan"
      id="jurusan"
      defaultValue={defaultfilter}
      required
      onChange={(e) => handleChange(e.target.value)}
      className="focus:outline-0 focus:ring-0 border-0 px-2 py-1 bg-slate-200 rounded-xl text-start"
    >
      <option value="">Pilih Jurusan</option>
      {jurusanText.map((item) => (
        <option value={item} key={item} className="capitalize">
          {item}
        </option>
      ))}
    </select>
  )
}
