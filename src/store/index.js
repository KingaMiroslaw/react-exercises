import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { populationApi } from "../API/PopulationAPI/PopulationAPI";

export default configureStore({
  reducer: {
    [populationApi.reducerPath]: populationApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(populationApi.middleware),
});
