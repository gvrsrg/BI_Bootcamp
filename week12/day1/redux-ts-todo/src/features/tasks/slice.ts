import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import ListItem from "../../model/ListItem";
import { StoreStateType } from "../../app/store";

// export type ActiveState = "all" | "active" | "completed";

export enum EnumActiveState {
  All,
  Active,
  Completed,
}

export type InitialStateType = {
  tasks: ListItem[];
  filter: EnumActiveState;
};

const initialState: InitialStateType = {
  tasks: [],
  filter: EnumActiveState.All,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // add - add task
    add: (state, action: {payload: string}) => {
      const task: ListItem = new ListItem(nanoid(), action.payload);
      state.tasks.push(task.serialize() as ListItem);
    },
    // remove - delete task
    remove: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // check - set check to true / false
    check: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.checked = !task.checked;
      }
    },
    // clear - delete all tasks
    clear: (state) => {
      state.tasks = [];
    },
    // active - set filter to one pf EnumActiveState states
    active: (state, action: PayloadAction<EnumActiveState>) => {
      state.filter = action.payload;
    },
  },
});

export const tasksState = (state: StoreStateType) => state.tasksReducer.tasks;
export const filterState = (state: StoreStateType) => state.tasksReducer.filter;
export const state = (state: StoreStateType) => state.tasksReducer;

export const { add, remove, check, clear, active } = tasksSlice.actions;
export default tasksSlice.reducer;


// App
//    Tasks
//      TasksTitle
//      TasksFilterButtons
//      TasksInput
//      TasksList
//        TaskItem
//          TaskRemove
