import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'English',
};

export const counterSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    //choose language
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = counterSlice.actions;

export default counterSlice.reducer;
