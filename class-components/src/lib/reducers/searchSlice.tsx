import { createSlice } from '@reduxjs/toolkit'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import { CardDetailsData } from '../../interfaces/cardsTypes/cardsTypes'

export interface SearchState {
  data?: Comics | null
  isLoading: boolean
  currentPage: number
  cardsDetails?: CardDetailsData[] | null
}

const initialState: SearchState = {
  data: null,
  isLoading: false,
  currentPage: 0,
  cardsDetails: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
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
  setCardDetails,
  removeCardDetails,
} = searchSlice.actions
export default searchSlice.reducer
