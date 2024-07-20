import { createSlice } from '@reduxjs/toolkit'
import { Comics } from '../../interfaces/searchTypes/searchTypes';

export interface SearchState {
  searchData: string;
  data: Comics | null;
  isLoading: boolean;
}

const initialState: SearchState = {
  searchData: '',
  data: null,
  isLoading: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchData(state, action) {
      state.searchData = action.payload
    },
    setData(state, action) {
      state.data = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    }
  },
})

export const { setSearchData, setData, setIsLoading } = searchSlice.actions;
export default searchSlice.reducer;

