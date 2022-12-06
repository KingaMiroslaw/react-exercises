import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    clear: (state) => {
      return initialState;
    },
  },
});

export const { incrementByAmount, decrementByAmount, clear } =
  counterSlice.actions;

export default counterSlice.reducer;
