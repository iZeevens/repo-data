import { screen } from '@testing-library/react'
import Pagination from './pagination'
import { elements } from '../cards/cards.test'
import renderCustomStoreProvider from '../../utils/customStore'

const currentPage = 0

describe('Pagination Component', () => {
  it('pagination page work correctly', () => {
    renderCustomStoreProvider(<Pagination />, {
      preloadedState: {
        search: { currentPage, isLoading: false, data: { comics: elements } },
      },
    })
    const paginationItems = screen.getAllByText(/^\d+$/)
    const expectedPages = Math.ceil(elements.length / 5)
    expect(paginationItems.length).toBe(expectedPages)
  })

  it('highlights the current page', () => {
    const currentPage = 1
    renderCustomStoreProvider(<Pagination />, {
      preloadedState: {
        search: { currentPage, isLoading: false, data: { comics: elements } },
      },
    })
    const activePage = screen.getByText('2')
    expect(activePage).toHaveClass('active-page')
  })
})
