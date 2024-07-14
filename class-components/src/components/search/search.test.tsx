import Search from './search'
import { screen, render, fireEvent } from '@testing-library/react'

const mockSetData = vi.fn()
const mockSetIsLoading = vi.fn()
const mockHandleSearch = vi.fn()

vi.mock('../../hooks/localStorageHook', () => ({
  __esModule: true,
  default: vi.fn(() => ['', vi.fn()]),
}))

vi.mock('../../hooks/fetchDataHook', () => ({
  __esModule: true,
  default: vi.fn(() => ({
    handleSearch: mockHandleSearch,
  })),
}))

describe('Search component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders the search form', () => {
    render(<Search setData={mockSetData} setIsLoading={mockSetIsLoading} />)
    const input = screen.getByPlaceholderText('Search')
    expect(input).toBeInTheDocument()
  })

  it('List renders', async () => {
    mockHandleSearch.mockResolvedValueOnce([{ id: 1, title: 'Test Comic' }])
    render(<Search setData={mockSetData} setIsLoading={mockSetIsLoading} />)
    const input = screen.getByPlaceholderText('Search')
    const form = screen.getByTestId('search-form')

    fireEvent.change(input, { target: { value: 'Test' } })
    fireEvent.submit(form)

    expect(mockSetIsLoading).toHaveBeenCalledWith(true)
    await vi.waitFor(() =>
      expect(mockHandleSearch).toHaveBeenCalledWith('Test')
    )
    await vi.waitFor(() =>
      expect(mockSetData).toHaveBeenCalledWith([{ id: 1, title: 'Test Comic' }])
    )
    expect(mockSetIsLoading).toHaveBeenCalledWith(false)
  })

  it('displays error for invalid search input', async () => {
    render(<Search setData={mockSetData} setIsLoading={mockSetIsLoading} />)
    const input = screen.getByPlaceholderText('Search')
    const form = screen.getByTestId('search-form')

    fireEvent.change(input, { target: { value: 'Invalid input  ' } })
    fireEvent.submit(form)

    expect(screen.getByText('No extra spaces')).toBeInTheDocument()
  })
})
