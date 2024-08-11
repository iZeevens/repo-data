import DetailsPage from '../app/details/[detailsUid]/page'
import { render, screen } from '@testing-library/react'

const replaceMock = vi.fn()
const getParam = vi.fn()

vi.mock('next/navigation', () => ({
  useSearchParams() {
    return {
      get: getParam,
    }
  },
  useRouter() {
    return {
      push: replaceMock,
    }
  },
}))


describe('DetailsPage Testing', () => {
  it('Check Dom', async() => {
    render(await DetailsPage({params: { detailsUid: 'CCMA0000086083' }}))
    expect(screen.getByText(/Number Pages:/)).toBeInTheDocument()
  })

  it('if data not exist', async() => {
    render(await DetailsPage({params: { detailsUid: 'ds' }}))
    expect(screen.getByText(/Data not found/)).toBeInTheDocument()
  })
})
