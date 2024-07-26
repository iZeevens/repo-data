import DetailsCard from './detailsCard'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import renderCustomStoreProvider from '../../utils/customStore'

describe('DeatilsCard Component', () => {
  beforeEach(() => {
    renderCustomStoreProvider(<DetailsCard />, {
      preloadedState: {
        search: {
          isLoading: false,
          currentPage: 1,
          cardsDetails: [
            {
              title: 'Card 1',
              numberOfPages: 100,
              stardateFrom: 500,
              stardateTo: 10000,
              yearFrom: 10,
              yearTo: 20,
            },
          ],
        },
      },
    })
  })

  it('renders details correctly', () => {
    waitFor(() => {
      expect(screen.getByText('Mock Title')).toBeInTheDocument()
    })
  })

  it('close correctly', async () => {
    const closeBtn = waitFor(() =>
      screen.getByRole('button', { name: /close/i })
    )

    fireEvent.click(await closeBtn)
    expect(window.location.pathname).toBe('/')
  })
})
