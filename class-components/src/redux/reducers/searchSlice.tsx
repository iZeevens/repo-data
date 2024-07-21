import { createSlice } from '@reduxjs/toolkit'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

export interface SearchState {
  data: Comics | null
  isLoading: boolean
  currentPage: number
}

const initialState: SearchState = {
  data: null,
  isLoading: false,
  currentPage: 1,
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
  },
})

export const { setData, setIsLoading, setPage } = searchSlice.actions
export default searchSlice.reducer
