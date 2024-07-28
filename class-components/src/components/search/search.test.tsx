import Search from './search'
import renderCustomStoreProvider from '../../utils/customStore'
import { screen, fireEvent } from '@testing-library/react'


vi.mock('../../hooks/localStorageHook', () => ({
  __esModule: true,
  default: vi.fn(() => ['', vi.fn()]),
}))

describe('Search component', () => {
  let input: HTMLInputElement
  let form: HTMLFormElement

  beforeEach(() => {
    renderCustomStoreProvider(<Search />, {
      preloadedState: { search: { isLoading: false, currentPage: 1 } },
    })
    input = screen.getByPlaceholderText('Search')
    form = screen.getByTestId('search-form')
  })

  test('renders the search form', () => {
    expect(input).toBeInTheDocument()
  })

  it('displays error for invalid search input', async () => {
    fireEvent.change(input, { target: { value: 'Invalid input  ' } })
    fireEvent.submit(form)

    expect(screen.getByText('No extra spaces')).toBeInTheDocument()
  })
})
