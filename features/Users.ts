import { createSlice } from "@reduxjs/toolkit";
import { sampleUserData } from "../utils/sample-data";
export const userSlice = createSlice({
  name: "users",
  initialState: { value: [] },
  reducer : {
    addUser : (state, action) => {

    }
  }
});
