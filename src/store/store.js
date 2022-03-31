import { createStore } from "redux";

const counterInitialState = { counter: 0, showCounter: true };

function counterReducer(state = counterInitialState, action) {
  console.log(action);
  if (action.type === "increment") {
    return { ...state, counter: state.counter + action.payload };
  }

  if (action.type === "decrement") {
    return { ...state, counter: state.counter - action.key };
  }

  if (action.type === "toggle") {
    return { ...state, showCounter: !state.showCounter };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;