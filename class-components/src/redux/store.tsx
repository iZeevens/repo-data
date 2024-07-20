import { configureStore } from '@reduxjs/toolkit'
import { comicsApi } from '../services/apiSlice'
import searchReducer from './reducers/searchSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    [comicsApi.reducerPath]: comicsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(comicsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
