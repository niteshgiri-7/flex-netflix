import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
  },
  reducers: {
    toggleShowGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
  },
});

export const { toggleShowGpt } = gptSlice.actions;
export default gptSlice.reducer;
