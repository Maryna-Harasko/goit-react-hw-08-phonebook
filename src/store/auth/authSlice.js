import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./authOperations";

const initialState = {
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = {name: null, email: null}
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        return state;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchingCurrent = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrent = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchingCurrent = false;
      });
    }
})

export const authReducer = authSlice.reducer;