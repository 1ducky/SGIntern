import { SORTABLE_FIELDS } from "@/StatisData/StaticType"
import { SortField } from "@/StatisData/StaticType"

export default function parseOrderBy(searchParams: URLSearchParams) {
  for (const [key, value] of searchParams.entries()) {
    if (!key.startsWith('order[')) continue

    const field = key.replace('order[', '').replace(']', '')

    if (
      SORTABLE_FIELDS.includes(field as SortField) &&
      (value === 'asc' || value === 'desc')
    ) {
      return { [field]: value }
    }
  }

  return undefined
}