import { screen } from '@testing-library/react'
import SearchPage from './searchPage'
import renderCustomStoreProvider from '../../utils/customStore'

const navigateMock = vi.fn()
vi.mock('react-router-dom', async () => {
  const actualRouter = await vi.importActual('react-router-dom')
  return { ...actualRouter, useNavigate: () => navigateMock }
})

vi.mock('../../hooks/navigateHook', () => ({
  __esModule: true,
  default: (key: string) => ({
    page: key === 'page' ? 1 : 0,
  }),
}))

describe('Search Page Component', () => {
  it('Checking layout', () => {
    renderCustomStoreProvider(<SearchPage />, {
      preloadedState: { search: { isLoading: false, currentPage: 2 } },
    })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })

  // it('navigate corretly', async () => {
  //   renderCustomStoreProvider(<SearchPage />, {
  //     preloadedState: { search: { isLoading: false, currentPage: 2 } },
  //   })

  //   await waitFor(() => {
  //     expect(navigateMock).toHaveBeenCalledWith('/?page=1', { replace: true })
  //   })
  // })
})
