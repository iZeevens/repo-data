import searchReducer, {
  setCardDetails,
  removeCardDetails,
} from '../lib/reducers/searchSlice'
import { detailsCardsData } from '../__mocks__/data'
import { SearchState } from '../lib/reducers/searchSlice'

describe('Search Slice Reducer', () => {
  const initState = {
    cardsDetails: null,
    data: null,
  } as SearchState

  it('should return the initial state', () => {
    expect(searchReducer(undefined, { type: 'unknown' })).toEqual(initState)
  })

  it('setCardDetails todo add comicsDetails to data when comicsDetails null', () => {
    const expectedState = {
      ...initState,
      cardsDetails: detailsCardsData,
    }

    expect(searchReducer(initState, setCardDetails(detailsCardsData))).toEqual(
      expectedState
    )
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
