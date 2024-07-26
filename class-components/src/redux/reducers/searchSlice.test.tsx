import searchReducer, {
  setData,
  setIsLoading,
  setCardDetails,
  removeCardDetails,
} from './searchSlice'
import { comicsData, detailsCardsData } from '../../__mocks__/data'
import { SearchState } from './searchSlice'

describe('Search Slice Reducer', () => {
  const initState = {
    data: null,
    isLoading: false,
    currentPage: 1,
    cardsDetails: null,
  } as SearchState

  it('should return the initial state', () => {
    expect(searchReducer(undefined, { type: 'unknown' })).toEqual(initState)
  })

  it('setData todo add comics elements to data', () => {
    const expectedState = {
      ...initState,
      data: comicsData,
    }

    expect(searchReducer(initState, setData(comicsData))).toEqual(expectedState)
  })

  it('setIsLoading todo toggle isLoading', () => {
    const expectedState = {
      ...initState,
      isLoading: true,
    }

    expect(searchReducer(initState, setIsLoading(true))).toEqual(expectedState)
  })

  it('setCardDetails todo add comicsDetails to data when comicsDetails null', () => {
    const expectedState = {
      ...initState,
      cardsDetails: detailsCardsData,
    }

    expect(
      searchReducer(initState, setCardDetails(detailsCardsData))
    ).toEqual(expectedState)
  })

  it('setCardDetails todo add comicsDetails to data when already have comicsDetails data', () => {
    const initialExpectedState = {
      ...initState,
      cardsDetails: detailsCardsData,
    }

    const expectedState: SearchState = {
      ...initialExpectedState,
      cardsDetails: [...detailsCardsData, ...detailsCardsData],
    }

    expect(
      searchReducer(initialExpectedState, setCardDetails(detailsCardsData))
    ).toEqual(expectedState)
  })

  it('removeCardDetails todo remove comicsDetails', () => {
    const expectedState = {
      ...initState,
      cardsDetails: [],
    }

    expect(searchReducer(initState, removeCardDetails([]))).toEqual(
      expectedState
    )
  })
})
