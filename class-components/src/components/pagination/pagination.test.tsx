import { render, screen } from '@testing-library/react'
import Pagination from './pagination'
import { elements } from '../cards/cards.test'
import { MemoryRouter } from 'react-router-dom'

const currentPage = 0


describe('Pagination Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Pagination elements={elements} currentPage={currentPage} />
      </MemoryRouter>
    )
  })

  it('pagination page work correctly', () => {
    const paginationItems = screen.getAllByText(/^\d+$/)
    expect(paginationItems.length).toBe(1)
  })
})
