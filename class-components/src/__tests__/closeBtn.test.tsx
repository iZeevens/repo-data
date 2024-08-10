import { render, screen } from '@testing-library/react'
import CloseBtn from '../components/closeBtn/closeBtn'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

const replaceMock = vi.fn()

vi.mock('next/navigation', () => ({
  useSearchParams() {
    return {
      get: (key: string) => {
        if (key === 'search') return 'someSearch'
        if (key === 'page') return '2'
        return null
      },
    }
  },
  useRouter() {
    return {
      replace: replaceMock,
    }
  },
}))

describe('Close Btn Test', () => {
  beforeEach(() => {
    render(<CloseBtn />)
  })

  it('handles close working', async () => {
    const user = userEvent.setup()
    const closeBtn = screen.getByText('close')

    await user.click(closeBtn)

    expect(replaceMock).toHaveBeenCalledWith('/?page=2&search=someSearch')
  })
})
