import { screen, waitFor } from '@testing-library/react'
import Cards from './cards'
import renderCustomStoreProvider from '../../utils/customStore'
import { comicsData } from '../../__mocks__/data'

describe('Cards Component', () => {
  beforeEach(() => {
    renderCustomStoreProvider(<Cards />, {
      preloadedState: {
        search: {
          data: { comics: comicsData },
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
      expect(comicTitles.length).toBe(
        comicsData.length > 5 ? 5 : comicsData.length
      )
    )
  })
})
