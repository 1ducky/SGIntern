"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function KeywordQuery({ defaultQuery }: { defaultQuery?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [value, setValue] = useState(defaultQuery ?? "")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return

    const params = new URLSearchParams(searchParams.toString())

    if (value.trim()) {
      params.set("q", value.trim())
    } else {
      params.delete("q")
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <input
      type="text"
      name="q"
      value={value}
      placeholder="Cari..."
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className="md:w-48 w-60 px-3 py-2 rounded-xl bg-slate-200 focus:outline-0 focus:ring-0"
    />
  )
}
