import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import moviesReducer from "./Slices/moviesSlice";
import gptReducer from "./Slices/gptSlice";
import lagnReducer from "./Slices/langConfSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    lang: lagnReducer,
  },
});

export default appStore;
