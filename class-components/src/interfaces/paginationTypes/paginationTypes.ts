import { ComicsData } from '../searchTypes/searchTypes'

interface PaginationType {
  elements: ComicsData[]
  currentPage: number
}

export type { PaginationType }
