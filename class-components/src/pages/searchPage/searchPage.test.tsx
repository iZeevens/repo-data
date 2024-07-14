import { render, screen } from '@testing-library/react'
import SearchPage from './searchPage'
import { MemoryRouter } from 'react-router-dom'

describe('Search Page Component', () => {
  it('Checking layout', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
