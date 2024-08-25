import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import tasksReducer from "../features/tasks/slice";


const combineReducersApp = combineReducers({ tasksReducer });

const store = configureStore({
  reducer: combineReducersApp,
});

// export type StoreStateType = ReturnType<typeof store.getState>;
// export type StoreDispatchType = typeof store.dispatch;

// export const useAppDispatch: () => StoreDispatchType = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector


// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export default store;