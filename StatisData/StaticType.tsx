// sorting only
export const SORTABLE_FIELDS = ['createAt'] as const
export type SortField = typeof SORTABLE_FIELDS[number]

// filter
export const FILTERABLE_FIELDS = ['jurusan'] as const
export type FilterField = typeof FILTERABLE_FIELDS[number]
