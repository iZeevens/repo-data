import DetailsPage from '../app/details/[detailsUid]/page'
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

describe('DetailsPage Testing', () => {
  it('check DOM', async () => {
    render(await DetailsPage({ params: { detailsUid: 'CCMA0000076475' } }))
    expect(screen.getByText(/Number Pages:/)).toBeInTheDocument()
    expect(screen.getByText(/Characters:/)).toBeInTheDocument()
    expect(screen.getByText(/Nyota Uhura/)).toBeInTheDocument()
  })

  it('if data not exist', async () => {
    render(await DetailsPage({ params: { detailsUid: 'ds' } }))
    expect(screen.getByText(/Data not found/)).toBeInTheDocument()
  })
})
