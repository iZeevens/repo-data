import { Comics } from '../searchTypes/searchTypes'

interface CardsProps {
  isLoading: boolean
  elements: Comics[]
  currentPage: number
}

export type { CardsProps }
