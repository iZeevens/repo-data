import DetailsCard from './detailsCard'
import { render, screen, fireEvent } from '@testing-library/react'
import renderTestsComponent from '../../utils/renderTests'

vi.mock('../../hooks/fetchDataHook', () => ({
  __esModule: true,
  default: vi.fn(() => ({
    isLoading: false,
    data: {
      title: 'Mock Title',
      numberOfPages: 100,
      stardateFrom: '2024-01-01',
      stardateTo: '2024-12-31',
      yearFrom: 2024,
      yearTo: 2025,
      photonovel: true,
      adaptation: false,
      characters: [
        {
          name: 'Mock Character',
          gender: 'M',
          yearOfBirth: 2000,
          yearOfDeath: null,
        },
      ],
    },
    handleSearch: vi.fn(),
  })),
}))

describe('DeatilsCard Component', () => {
  beforeEach(() => {
    render(renderTestsComponent(<DetailsCard />))
  })

  it('renders details correctly', async () => {
    await vi.waitFor(() => {
      expect(screen.getByText('Mock Title')).toBeInTheDocument()
    })
  })

  it('close correctly', () => {
    fireEvent.click(screen.getByText('close'))
    expect(window.location.pathname).toBe('/')
  })
})
