import { render, screen } from '@testing-library/react'
import Cards from './cards'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import renderTestsComponent from '../../utils/renderTests'

const createComics = (
  title: string,
  publishedYear: number,
  publishedMonth: number,
  publishedDay: number,
  numberOfPages: number,
  photonovel: boolean,
  adaptation: boolean,
  uid: string
): Comics => ({
  title,
  publishedYear,
  publishedMonth,
  publishedDay,
  numberOfPages,
  photonovel,
  adaptation,
  uid,
})

export const elements: Comics[] = [
  createComics('Card 1', 2024, 5, 15, 100, true, false, 'CCMA0000076475'),
  createComics('Card 2', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 3', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 4', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 5', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 6', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
]

const isLoading = false
const currentPage = 0

describe('Cards Component', () => {
  beforeEach(() => {
    render(
      renderTestsComponent(
        <Cards
          isLoading={isLoading}
          elements={elements}
          currentPage={currentPage}
        />
      )
    )
  })

  it('renders cards', async () => {
    const comicTitles = screen.getAllByText(/Card \d/)

    expect(comicTitles.length).toBe(elements.length > 5 ? 5 : elements.length)
  })
})
