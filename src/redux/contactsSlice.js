import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = { items: [] };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;