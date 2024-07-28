import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailsCard from './detailsCard'
import { detailsCardsData } from '../../__mocks__/data'
import renderCustomStoreProvider from '../../utils/customStore'

const mockApiData = {
  isLoading: false,
  data: {
    comics: { title: 'Card 1', numberOfPages: 100, characters: [] },
  },
}

vi.mock('../../services/apiSlice', async () => {
  const actualApiSlice = await vi.importActual('../../services/apiSlice')
  return {
    ...actualApiSlice,
    useGetComicsByUidMutation: vi.fn(() => [vi.fn(), mockApiData]),
  }
})

describe('DeatilsCard Component', () => {
  beforeEach(() => {
    mockApiData.isLoading = false
    renderCustomStoreProvider(<DetailsCard />, {
      preloadedState: {
        search: {
          isLoading: false,
          currentPage: 0,
          cardsDetails: detailsCardsData,
        },
      },
    })
  })

  it('loading test', () => {
    mockApiData.isLoading = true

    renderCustomStoreProvider(<DetailsCard />, {
      preloadedState: {
        search: {
          isLoading: false,
          currentPage: 0,
          cardsDetails: detailsCardsData,
        },
      },
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders details correctly', async () => {
    await waitFor(() => {
      expect(screen.getByText('Card 1')).toBeInTheDocument()
    })
  })

  it('close correctly', async () => {
    const user = userEvent.setup()
    const closeBtn = await waitFor(() =>
      screen.getByRole('button', { name: /close/i })
    )

    await user.click(closeBtn)
  })
})
