import { render, screen } from '@testing-library/react'
import Pagination from './pagination'
import { elements } from '../cards/cards.test'
import { MemoryRouter } from 'react-router-dom'
import renderTestsComponent from '../../utils/renderTests'

const currentPage = 0

describe('Pagination Component', () => {
  it('pagination page work correctly', () => {
    render(
      renderTestsComponent(
        <Pagination elements={elements} currentPage={currentPage} />
      )
    )
    const paginationItems = screen.getAllByText(/^\d+$/)
    const expectedPages = Math.ceil(elements.length / 5)
    expect(paginationItems.length).toBe(expectedPages)
  })

  it('highlights the current page', () => {
    const currentPage = 1
    render(
      <MemoryRouter>
        <Pagination elements={elements} currentPage={currentPage} />
      </MemoryRouter>
    )
    const activePage = screen.getByText('2')
    expect(activePage).toHaveClass('active-page')
  })
})
