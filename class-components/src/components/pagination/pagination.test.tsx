import { screen } from '@testing-library/react'
import Pagination from './pagination'
import { comicsData } from '../../__mocks__/data'
import renderCustomStoreProvider from '../../utils/customStore'

const currentPage = 0

describe('Pagination Component', () => {
  it('pagination page work correctly', () => {
    renderCustomStoreProvider(<Pagination />, {
      preloadedState: {
        search: { currentPage, isLoading: false, data: { comics: comicsData } },
      },
    })
    const paginationItems = screen.getAllByText(/^\d+$/)
    const expectedPages = Math.ceil(comicsData.length / 5)
    expect(paginationItems.length).toBe(expectedPages)
  })

  it('highlights the current page', () => {
    const currentPage = 1
    renderCustomStoreProvider(<Pagination />, {
      preloadedState: {
        search: { currentPage, isLoading: false, data: { comics: comicsData } },
      },
    })
    const activePage = screen.getByText('2')
    expect(activePage).toHaveClass('active-page')
  })
})
