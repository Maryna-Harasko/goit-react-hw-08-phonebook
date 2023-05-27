import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, removeContacts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.error = null;
      })
      .addCase(removeContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const contactsReducer = contactsSlice.reducer;
