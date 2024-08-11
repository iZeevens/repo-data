import { ComicsData } from '../interfaces/searchTypes/searchTypes'
import { CardDetailsData } from '../interfaces/cardsTypes/cardsTypes';

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

const cardDetails: CardDetailsData = {
  title: 'The Final Frontier',
  numberOfPages: 250,
  stardateFrom: 42000,
  stardateTo: 43000,
  yearFrom: 2365,
  yearTo: 2370,
  characters: [
    {
      name: 'James T. Kirk',
      gender: 'M',
      yearOfBirth: 2233,
      yearOfDeath: 2293,
    },
    {
      name: 'Spock',
      gender: 'M',
      yearOfBirth: 2230,
      yearOfDeath: 2293,
    },
    {
      name: 'Nyota Uhura',
      gender: 'F',
      yearOfBirth: 2239,
      yearOfDeath: 2293,
    },
  ],
  photonovel: true,
  adaptation: false,
  uid: 'CCMA0000076475',
};

const comicsData: ComicsData[] = [
  createComics('Card 1', 2024, 5, 15, 100, true, false, 'CCMA0000076475'),
  createComics('Card 2', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 3', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 4', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 5', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
  createComics('Card 6', 2024, 6, 20, 120, false, true, 'CCMA0000076476'),
]

export { detailsCardsData, cardDetails, comicsData }
