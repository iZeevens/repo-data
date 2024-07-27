import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailsCard from './detailsCard'
import { detailsCardsData } from '../../__mocks__/data'
import renderCustomStoreProvider from '../../utils/customStore'

describe('DeatilsCard Component', () => {
  beforeEach(() => {
    renderCustomStoreProvider(<DetailsCard />, {
      preloadedState: {
        search: {
          isLoading: false,
          currentPage: 1,
          cardsDetails: detailsCardsData,
        },
      },
    })
  })

  it('renders details correctly', () => {
    waitFor(() => {
      expect(screen.getByText('20')).toBeInTheDocument()
    })
  })

  it('close correctly', async () => {
    const user = userEvent.setup()
    const closeBtn = await waitFor(() =>
      screen.getByRole('button', { name: /close/i })
    )

    await user.click(closeBtn)
    waitFor(() => {
      expect(
        screen.queryByRole('button', { name: /close/i })
      ).not.toBeInTheDocument()
    })
  })
})
