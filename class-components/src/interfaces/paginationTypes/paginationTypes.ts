import { Comics } from '../searchTypes/searchTypes'

interface PaginationType {
  elements: Comics[]
  currentPage: number
}

export type { PaginationType }
