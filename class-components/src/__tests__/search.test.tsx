import Search from '../components/search/search'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

const pushMock = vi.fn()
const queryMock = vi.fn()

vi.mock('next/router', () => ({
  useRouter() {
    return {
      push: pushMock,
      query: queryMock(),
    }
  },
}))

describe('Search Testing', () => {
  it('search corrctly', async () => {
    queryMock.mockReturnValue({ search: 'hey' })
    render(<Search />)

    const user = userEvent.setup()
    const searchBtn = screen.getByText('Search')
    userEvent.type(screen.getByPlaceholderText('Search'), 'hey')

    await user.click(searchBtn)
    expect(pushMock).toHaveBeenCalledWith(`/?page=1&search=hey`)
  })

  it('search error', async () => {
    queryMock.mockReturnValue({ search: '     hey' })
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
