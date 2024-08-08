import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";

export const appReducer = combineReducers({
  counter: counterReducer,
  usersReducer,
})


export const logger = (store) => (next) => (action) => {
  console.log('prev state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
  //console.log('prev state', store.getState());
}

export default configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  //middleware: () => [logger],
});
// export default store;
