import { configureStore } from "@reduxjs/toolkit";
import {
  curryGetDefaultMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
