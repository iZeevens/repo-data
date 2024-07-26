import { screen } from '@testing-library/react'
import SearchPage from './searchPage'
import renderCustomStoreProvider from '../../utils/customStore'

describe('Search Page Component', () => {
  it('Checking layout', () => {
    renderCustomStoreProvider(<SearchPage />, {
      preloadedState: { search: { isLoading: true, currentPage: 1 } },
    })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
})
