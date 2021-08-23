import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { notes: [] };

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      console.log(`action`, action);
      return { ...state, notes: [...state.notes, action.payload] };
    },
  },
});

export const store = configureStore({ reducer: notesSlice.reducer });
