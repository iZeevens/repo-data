import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pagination from '../components/pagination/pagination'
import { comicsData } from '../__mocks__/data'

const replaceMock = vi.fn()

vi.mock('next/router', () => ({
  useRouter() {
    return {
      push: replaceMock,
    }
  },
}))

describe('Pagination Testing', () => {
  it('renders nothing when data is null', () => {
    render(<Pagination data={{ comics: null }} currentPage="1" search="soda" />)

    expect(screen.queryByText('1')).toBeNull()
  })

  it('correctly routing', async () => {
    render(
      <Pagination currentPage="1" data={{ comics: comicsData }} search="soda" />
    )

    const user = userEvent.setup()
    const firstElem = screen.getByText('1')

    await user.click(firstElem)

    expect(replaceMock).toHaveBeenCalledWith('/?page=1&search=soda')
  })
})
