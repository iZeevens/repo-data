import { Comics } from '../searchTypes/searchTypes'

interface CardsProps {
  isLoading: boolean
  elements: Comics[]
  currentPage: number
}

interface Characters {
  name: string
  gender: 'M' | 'F'
  yearOfBirth: number
  yearOfDeath: number
}

interface CardDetails {
  title?: string
  numberOfPages?: number
  stardateFrom?: number
  stardateTo?: number
  yearFrom?: number
  yearTo?: number
  characters?: Characters[]
  photonovel?: boolean
  adaptation?: boolean
}

export type { CardsProps, CardDetails }
