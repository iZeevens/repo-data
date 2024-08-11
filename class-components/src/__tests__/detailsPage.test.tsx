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
  it('Check Dom', async () => {
    render(await DetailsPage({ params: { detailsUid: 'CCMA0000086083' } }))
    expect(screen.getByText(/Number Pages:/)).toBeInTheDocument()
  })

  it('if data not exist', async () => {
    render(await DetailsPage({ params: { detailsUid: 'ds' } }))
    expect(screen.getByText(/Data not found/)).toBeInTheDocument()
  })
})
