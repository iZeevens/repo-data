import { Comics } from '../searchTypes/searchTypes'

interface CardsProps {
  isLoading: boolean
  elements: Comics[]
  currentPage: number
}

interface CardDetails {
  stardateFrom?: number
  stardateTo?: number
  yearFrom?: number
  yearTo?: number
  photonovel?: boolean
  adaptation?: boolean
}

export type { CardsProps, CardDetails }
