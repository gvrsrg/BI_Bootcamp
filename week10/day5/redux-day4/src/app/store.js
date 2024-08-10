import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { thunk } from "redux-thunk";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";

import { increment, incrementByNum } from "../features/counter/counterSlice";
import { initusers } from "../features/users/usersSlice";

export const appReducer = combineReducers({
  counter: counterReducer,
  usersReducer,
});

export const loggerA = (store) => (next) => (action) => {
  console.log("prev state=>", store.getState());
  console.log("action=>", action);
  const retAction = next(action);
  // console.log("action=>", retAction);
  console.log("next state=>", store.getState());
};

const store = configureStore({
  reducer: appReducer,
  // middleware: () => [logger, loggerA],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(logger, loggerA),
});

export default store;

// console.log(store.getState());

// store.dispatch({type: 'counter/increment'})

/** middleware = function */

const delayIncrement = (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increment());
  }, 5000);
};

// store.dispatch(delayIncrement);

const delayIncrementByNum = (num) => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(incrementByNum(num));
  }, 5000);
};
// store.dispatch(delayIncrementByNum(10));

const fetchUsers = () => async (dispatch, getState) => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();

  
    dispatch(initusers(data));
  } catch (error) {
    console.log(error);
  }
};
// store.dispatch(fetchUsers());