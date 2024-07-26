import { ComicsData } from '../interfaces/searchTypes/searchTypes'

const createComics = (
  title: string,
  publishedYear: number,
  publishedMonth: number,
  publishedDay: number,
  numberOfPages: number,
  photonovel: boolean,
  adaptation: boolean,
  uid: string
): ComicsData => ({
  title,
  publishedYear,
  publishedMonth,
  publishedDay,
  numberOfPages,
  photonovel,
  adaptation,
  uid,
})

const detailsCardsData = [
  {
    title: 'Card 1',
    numberOfPages: 100,
    stardateFrom: 500,
    stardateTo: 10000,
    yearFrom: 10,
    yearTo: 20,
  },
]

const comicsData: ComicsData[] = [
  createComics('Card 1', 2024, 5, 15, 100, true, false, 'CCMA0000076475'),
  createComics('Card 2', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 3', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 4', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 5', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 6', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
]

export { detailsCardsData, comicsData }
