import { configureStore } from '@reduxjs/toolkit';
import dataFormsSlice from './slice/dataFormsSlice';

export const store = configureStore({
  reducer: dataFormsSlice
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
