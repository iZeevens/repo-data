import DetailsPage from '../pages/details/[id]'
import { render, screen } from '@testing-library/react'
import { cardDetails } from '../__mocks__/data'


vi.mock('next/navigation', () => ({
  useSearchParams() {
    return {
      get: vi.fn(),
    }
  },
  useRouter() {
    return {
      push: vi.fn(),
    }
  },
}))

describe('DetailsPage Testing', () => {
  it('check DOM', () => {
    render(DetailsPage({ comicsData: cardDetails }))
    expect(screen.getByText(/Number Pages:/)).toBeInTheDocument()
    expect(screen.getByText(/Characters:/)).toBeInTheDocument()
    expect(screen.getByText(/Nyota Uhura/)).toBeInTheDocument()
  })

  it('if data not exist', () => {
    render(DetailsPage({ comicsData: null }))
    expect(screen.getByText(/Data not found/)).toBeInTheDocument()
  })
})
