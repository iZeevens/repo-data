import SearchPage from '../pages'
import renderCustomStoreProvider from '../utils/customStore'
import { waitFor } from '@testing-library/react'

const navigateMock = vi.fn()
let currentPage = -1

vi.mock('react-router-dom', async () => {
  const actualRouter = await vi.importActual('react-router-dom')
  return { ...actualRouter, useNavigate: () => navigateMock }
})

vi.mock('../../hooks/navigateHook', () => ({
  __esModule: true,
  default: () => ({
    page: currentPage,
  }),
}))

describe('Search Page Component', () => {
  it('navigate correctly', async () => {
    currentPage = 15

    renderCustomStoreProvider(<SearchPage />, {
      preloadedState: {
        search: {
          isLoading: false,
          currentPage: 15,
          data: { comics: new Array(10).fill(null) },
        },
      },
    })

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/?page=1', { replace: true })
    })
  })

  it('navigate correctly when currentPage < 0', async () => {
    renderCustomStoreProvider(<SearchPage />, {
      preloadedState: {
        search: {
          isLoading: false,
          currentPage: -1,
          data: { comics: new Array(10).fill(null) },
        },
      },
    })

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/?page=1', { replace: true })
    })
  })
})
