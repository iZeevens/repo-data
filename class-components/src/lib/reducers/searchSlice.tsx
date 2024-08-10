import { createSlice } from '@reduxjs/toolkit'
import { CardDetailsData } from '../../interfaces/cardsTypes/cardsTypes'

export interface SearchState {
  cardsDetails?: CardDetailsData[] | null
}

const initialState: SearchState = {
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

export const { setCardDetails, removeCardDetails } = searchSlice.actions
export default searchSlice.reducer
