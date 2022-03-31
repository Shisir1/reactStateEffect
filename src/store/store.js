import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitialState = { counter: 5, showCounter: true };

const counterSlice = createSlice({
  name: 'counter', //name of the Slice
  initialState: counterInitialState,
  reducers: {
    increment(state,action){
      state.counter = state.counter + action.payload;
    },
    decrement(state,action){
      state.counter = state.counter - action.payload;
    },
    toggle(state,action){
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({reducer: counterSlice.reducer});

export const counterActions = counterSlice.actions;
export default store;