import { createSlice } from '@reduxjs/toolkit'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

export interface SearchState {
  data: Comics | null
  isLoading: boolean
}

const initialState: SearchState = {
  data: null,
  isLoading: false,
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
  },
})

export const { setData, setIsLoading } = searchSlice.actions
export default searchSlice.reducer
