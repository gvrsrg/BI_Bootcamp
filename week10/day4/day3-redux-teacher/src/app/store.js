import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import logger from "redux-logger";
// import { thunk } from "redux-thunk";

import usersReducer from "../features/users/usersSlice";
import { initusers } from "../features/users/usersSlice";

export const appReducer = combineReducers({
  counter: counterReducer,
  usersReducer,
});

export const loggerA = (store) => (next) => (action) => {
  console.log("prev state=>", store.getState());
  console.log("action=>", action);
  const retAction = next(action);
  console.log("next state=>", store.getState());
};

const store = configureStore({
  reducer: appReducer,
  // middleware: () => [logger, loggerA],
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(loggerA),
});

export default store;

// console.log(store.getState());

/** middleware = function */

const fetchUsers = () => async (dispatch, getState) => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();

  
    dispatch(initusers(data));
  } catch (error) {
    console.log(error);
  }
};
const fetchPosts = () => async (dispatch, getState) => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();

  
    dispatch(initposts(data));
  } catch (error) {
    console.log(error);
  }
};// store.dispatch(fetchUsers());