import Search from '../components/search/search'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

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

describe('Search Testing', () => {
  it('search corrctly', async () => {
    getParam.mockReturnValue('hey')


    render(<Search />)

    const user = userEvent.setup()
    const searchBtn = screen.getByText('Search')
    userEvent.type(screen.getByPlaceholderText('Search'), 'hey')

    await user.click(searchBtn)

    expect(replaceMock).toHaveBeenCalledWith(`/?page=1&search=hey`)
  })

  it('search error', async () => {
    getParam.mockReturnValue('     hey')
    render(<Search />)

    const user = userEvent.setup()
    const searchBtn = screen.getByText('Search')
    userEvent.type(screen.getByPlaceholderText('Search'), '     hey')

    await user.click(searchBtn)

    expect(
      await waitFor(() => screen.getByText('No extra spaces'))
    ).toBeInTheDocument()
  })
})
