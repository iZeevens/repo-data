import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cards from './cards'
import renderCustomStoreProvider from '../../utils/customStore'
import { comicsData } from '../../__mocks__/data'

const navigateMock = vi.fn()
vi.mock('react-router-dom', async () => {
  const actualRouter = await vi.importActual('react-router-dom')
  return { ...actualRouter, useNavigate: () => navigateMock }
})

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

  it('click on the card', async () => {
    const user = userEvent.setup()
    const cardElements = screen.getByText('Card 1')

    user.click(cardElements)

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith(
        `/details?page=1&id=CCMA0000076475`
      )
    })
  })
})
