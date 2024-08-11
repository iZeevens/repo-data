import SearchPage from '../pages'
import { render, screen } from '@testing-library/react'
import { comicsData } from '../__mocks__/data'

vi.mock('next/router', () => ({
  useSearchParams() {
    return {
      get: vi.fn(),
    }
  },
  useRouter() {
    return {
      push: vi.fn(),
      query: {search: 's'},
      prefetch: () => null
    }
  },
}))

describe('Search Page testing', () => {
  it('In Dom', () => {
    render(<SearchPage search="s" data={{ comics: comicsData }} currentPage="1" />);

    expect(screen.getByText(/Search/)).toBeInTheDocument()
  })
})
