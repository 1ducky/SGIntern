export function parsePagination(searchParams: URLSearchParams) {
  const offset = Number(searchParams.get("offset") ?? 0)
  const limit = Number(searchParams.get("limit") ?? 10)

  return {
    skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
    take:
      Number.isNaN(limit) || limit <= 0
        ? 10
        : Math.min(limit, 15), // hard limit untuk keamanan
  }
}