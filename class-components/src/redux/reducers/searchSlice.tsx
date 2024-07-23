import { createSlice } from '@reduxjs/toolkit'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import { CardDetailsData } from '../../interfaces/cardsTypes/cardsTypes'

export interface SearchState {
  data: Comics | null
  isLoading: boolean
  currentPage: number
  cardsDetails: CardDetailsData[] | null
}

const initialState: SearchState = {
  data: null,
  isLoading: false,
  currentPage: 1,
  cardsDetails: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setPage(state, action) {
      state.currentPage = action.payload
    },
    setCardDetails(state, action) {
      if (state.cardsDetails) {
        state.cardsDetails = [...state.cardsDetails, ...action.payload]
      } else {
        state.cardsDetails = action.payload
      }
    },
    removeCardDetails(state, action) {
      state.cardsDetails = action.payload
    },
  },
})

export const {
  setData,
  setIsLoading,
  setPage,
  setCardDetails,
  removeCardDetails,
} = searchSlice.actions
export default searchSlice.reducer
