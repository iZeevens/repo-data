import { Comics } from '../searchTypes/searchTypes'

interface PaginationType {
  elements: Comics[]
  page: number
  setPage: (page: number) => void
}

export type { PaginationType }
