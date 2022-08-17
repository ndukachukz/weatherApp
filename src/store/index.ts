import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherFeature/weatherSlice";

const reducers = combineReducers({
  weather: weatherSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
