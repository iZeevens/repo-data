import DetailsPage from '../pages/details/[id]'
import { render, screen } from '@testing-library/react'
import { ParsedUrlQuery } from 'querystring'
import { getServerSideProps } from '../pages/details/[id]'
import { GetServerSidePropsContext } from 'next'
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

  it('should return values if query parameters provided', async () => {
    const context = {
      query: { id: 'dsds' } as ParsedUrlQuery,
    }

    const value = await getServerSideProps(context as GetServerSidePropsContext)
    expect(value).toEqual({
      props: { comicsData: null },
    })
  })
})
