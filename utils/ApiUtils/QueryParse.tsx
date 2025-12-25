import { Prisma } from "@/app/generated/prisma/client"

export default function parseSearch(searchParams: URLSearchParams) {
  const query = searchParams.get('query')
  if (!query) return undefined

  return {
    name: {
      contains: query,
      mode: Prisma.QueryMode.insensitive,
    },
  }
}
