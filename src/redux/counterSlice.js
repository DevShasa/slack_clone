import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
  name: 'counter',
  
  //initialState
  initialState: { value: 0, status: 'idle' },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

