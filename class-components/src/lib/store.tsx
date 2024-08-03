import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { comicsApi } from '../services/apiSlice'
import searchReducer from './reducers/searchSlice'

const rootReducer = combineReducers({
  search: searchReducer,
  [comicsApi.reducerPath]: comicsApi.reducer,
})

function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(comicsApi.middleware),
  })
}

const store = setupStore()

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>

export { store, setupStore }
