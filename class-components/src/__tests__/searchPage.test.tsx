import SearchPage from '../pages'
import { ParsedUrlQuery } from 'querystring'
import { render, screen } from '@testing-library/react'
import { GetServerSidePropsContext } from 'next'
import { comicsData } from '../__mocks__/data'
import { getServerSideProps } from '../pages'

vi.mock('../services/getServerData')

vi.mock('next/router', () => ({
  useSearchParams() {
    return {
      get: vi.fn(),
    }
  },
  useRouter() {
    return {
      push: vi.fn(),
      query: { search: 's' },
      prefetch: () => null,
    }
  },
}))

describe('Search Page testing', () => {
  it('renders correctly in the DOM', () => {
    render(
      <SearchPage search="s" data={{ comics: comicsData }} currentPage="1" />
    )

    expect(screen.getByText(/Search/)).toBeInTheDocument()
  })

  it('should return values if query parameters provided', async () => {
    const context = {
      query: { page: '1', search: 's' } as ParsedUrlQuery,
    }

    const value = await getServerSideProps(context as GetServerSidePropsContext)
    expect(value).toEqual({
      props: { data: undefined, currentPage: '1', search: 's' },
    })
  })

  it('should return default values if query parameters are not provided', async () => {
    const context = { query: {} as ParsedUrlQuery }
    const value = await getServerSideProps(context as GetServerSidePropsContext)

    expect(value).toEqual({
      props: { data: undefined, currentPage: '1', search: '' },
    })
  })
})
