import { configureStore } from '@reduxjs/toolkit'
import { comicsApi } from '../services/apiSlice'

const store = configureStore({
  reducer: {
    [comicsApi.reducerPath]: comicsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(comicsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
