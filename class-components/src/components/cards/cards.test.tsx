import { screen } from '@testing-library/react'
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
          currentPage: 0,
          cardsDetails: null,
        },
      },
    })
  })

  it('renders cards', async () => {
    const cardElements = screen.getAllByText(/Card \d/)

    expect(cardElements.length).toBeGreaterThan(0)
  })
})
