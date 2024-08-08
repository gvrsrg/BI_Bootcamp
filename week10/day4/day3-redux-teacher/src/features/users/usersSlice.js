import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "", // loading, succeeded, failed
};

export const fetchUsers = createAsyncThunk("users/fetch", async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );
  const data = await result.json();
  return data;
  // throw new Error('jjjj')
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    addUserPrepare: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(name, email) {
        return {
          payload: { id: nanoid(), name, email },
        };
      },
    },
    initusers: (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { adduser, addUserPrepare, initusers } = usersSlice.actions;

export default usersSlice.reducer;
