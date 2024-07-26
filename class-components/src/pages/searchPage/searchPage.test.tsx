import { screen } from '@testing-library/react'
import SearchPage from './searchPage'
import renderCustomStoreProvider from '../../utils/customStore'

describe('Search Page Component', () => {
  it('Checking layout', () => {
    renderCustomStoreProvider(<SearchPage />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
