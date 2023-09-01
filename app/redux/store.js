import { configureStore } from '@reduxjs/toolkit'
import reportsSlice from './slices/reportsSlice.js';


export const store = configureStore({
  reducer: {
    reports: reportsSlice,
  }
});
