import { createSlice } from "@reduxjs/toolkit";

const initialState: any = null;

const weatherSlice = createSlice({
  initialState,
  name: "weather",
  reducers: {
    setWeather(state, action) {
      state = action.payload;
      return state;
    },
    getWeather(state) {
      return state;
    },
  },
});

export const { setWeather, getWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
