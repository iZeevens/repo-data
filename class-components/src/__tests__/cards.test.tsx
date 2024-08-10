import { screen, waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Cards from '../components/cards/cards'
import renderCustomStoreProvider from '../utils/customStore'
import { comicsData } from '../__mocks__/data'

// const pushMock = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('Cards Component', () => {
  beforeEach(() => {
    renderCustomStoreProvider(
      <Cards currentPage="1" data={{ comics: comicsData }} />,
      {
        preloadedState: {
          search: {
            cardsDetails: null,
          },
        },
      }
    )
  })

  it('renders cards', async () => {
    const cardElements = await waitFor(() => screen.getAllByText(/Card \d/))
    expect(cardElements.length).toBeGreaterThan(0)
  })

  // it('click on the card', async () => {
  //   const user = userEvent.setup()
  //   const cardElement = screen.getByText('Card 1')

  //   await user.click(cardElement)

  //   await waitFor(() => {
  //     expect(pushMock).toHaveBeenCalledWith(
  //       `/details?page=1&id=CCMA0000076475`
  //     )
  //   }, {timeout: 3000})
  // })
})
