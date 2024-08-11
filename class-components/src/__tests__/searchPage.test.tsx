import SearchPage from '../app/page'
import { render, screen } from '@testing-library/react'

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

describe('Search Page testing', () => {
  it('In Dom', async () => {
    render(await SearchPage({ searchParams: { search: 's', page: '1' } }))

    expect(screen.getByText(/Search/)).toBeInTheDocument()
  })
})
