import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Cards from './cards'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

const elements: Comics[] = [
  {
    title: 'Card 1',
    publishedYear: 2024,
    publishedMonth: 5,
    publishedDay: 15,
    numberOfPages: 100,
    photonovel: true,
    adaptation: false,
    uid: 'CCMA0000076475',
  },
  {
    title: 'Card 2',
    publishedYear: 2024,
    publishedMonth: 6,
    publishedDay: 20,
    numberOfPages: 120,
    photonovel: false,
    adaptation: true,
    uid: 'CCMA0000076476',
  },
]
const isLoading = false
const currentPage = 0

describe('Cards Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Cards
          isLoading={isLoading}
          elements={elements}
          currentPage={currentPage}
        />
      </MemoryRouter>
    )
  })

  it('renders cards', async () => {
    const comicTitles = screen.getAllByText(/Card \d/)
    expect(comicTitles.length).toBe(elements.length)
  })
})
