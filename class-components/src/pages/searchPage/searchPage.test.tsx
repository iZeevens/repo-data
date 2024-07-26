import { useNavigate } from 'react-router-dom'
import { screen, waitFor } from '@testing-library/react'
import SearchPage from './searchPage'
import renderCustomStoreProvider from '../../utils/customStore'

describe('Search Page Component', () => {
  it('Checking layout', () => {
    renderCustomStoreProvider(<SearchPage />, {
      preloadedState: { search: { isLoading: true, currentPage: 2 } },
    })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })

  it('check navigate to first page', () => {
    renderCustomStoreProvider(<SearchPage />, {
      preloadedState: { search: { isLoading: true, currentPage: 6 } },
    })

    waitFor(() => {
      expect(useNavigate).toHaveBeenCalledWith('/?page=1', { replace: true })
    })
  })

  it('should not navigate if currentPage is within bounds', () => {
    renderCustomStoreProvider(<SearchPage />, {
      preloadedState: { search: { isLoading: true, currentPage: 1 } },
    })

    waitFor(() => expect(useNavigate).not.toHaveBeenCalled())
  });
})
