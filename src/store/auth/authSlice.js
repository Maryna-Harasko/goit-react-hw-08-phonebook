import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./authOperations";

const initialState = {
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers:(builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
    }
})

export const authReducer = authSlice.reducer;