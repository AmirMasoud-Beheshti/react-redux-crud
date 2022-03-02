import { createSlice } from "@reduxjs/toolkit";
import { sampleUserData } from "../utils/sample-data";
export const userSlice = createSlice({
  name: "users",
  initialState: { value: sampleUserData },
  reducers: {
    addUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeUser: (state, action) =>
      void(state.value = state.value.filter(
        (user) => user.id !== action.payload.id
      )),
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
