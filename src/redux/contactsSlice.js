// import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,

//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;