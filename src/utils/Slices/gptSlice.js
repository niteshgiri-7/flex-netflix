import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    showShimmer:false,
    fetchData:false,
    gptMovies: null,
    gptMoviesNames:null,
  },
  reducers: {
    toggleShowGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
    addGptmoviesResult: (state, action) => {
      const {gptMovies,gptMoviesNames} = action.payload;
      state.gptMovies = gptMovies;
      state.gptMoviesNames= gptMoviesNames;
    },
    callGPTsearchHook:(state)=>{
      state.fetchData=!state.fetchData; //to activate the searchButton(to run useHanldeGPTsearch)
    },
    toggleShowShimmer:(state)=>{
      state.showShimmer=!state.showShimmer;
    }
  },
});

export const { toggleShowGpt,addGptmoviesResult,callGPTsearchHook,toggleShowShimmer} = gptSlice.actions;
export default gptSlice.reducer;
