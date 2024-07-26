import { screen, waitFor } from '@testing-library/react'
import Cards from './cards'
import { ComicsData } from '../../interfaces/searchTypes/searchTypes'
import renderCustomStoreProvider from '../../utils/customStore'

export const createComics = (
  title: string,
  publishedYear: number,
  publishedMonth: number,
  publishedDay: number,
  numberOfPages: number,
  photonovel: boolean,
  adaptation: boolean,
  uid: string
): ComicsData => ({
  title,
  publishedYear,
  publishedMonth,
  publishedDay,
  numberOfPages,
  photonovel,
  adaptation,
  uid,
})

export const elements: ComicsData[] = [
  createComics('Card 1', 2024, 5, 15, 100, true, false, 'CCMA0000076475'),
  createComics('Card 2', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 3', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 4', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 5', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 6', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
]

describe('Cards Component', () => {
  beforeEach(() => {
    renderCustomStoreProvider(<Cards />, {
      preloadedState: {
        search: {
          data: { comics: elements },
          isLoading: false,
          currentPage: 1,
          cardsDetails: null,
        },
      },
    })
  })

  it('renders cards', () => {
    const comicTitles = screen.getAllByText(/Card \d/)

    waitFor(() =>
      expect(comicTitles.length).toBe(elements.length > 5 ? 5 : elements.length)
    )
  })
})
