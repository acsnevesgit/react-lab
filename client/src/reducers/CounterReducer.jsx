import { createSlice } from '@reduxjs/toolkit';

const CounterReducer = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, amount) => {
      state.value += 1;
    },
    decrement: (state, amount) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CounterReducer.actions;
export default CounterReducer.reducer;
