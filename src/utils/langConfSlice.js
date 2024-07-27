import { createSlice } from "@reduxjs/toolkit";

const lang = createSlice({
    name:"lang",
    initialState:{
        chosenLang:"en",
    },
    reducers:{
        chooseLanguage:(state,action)=>{
            state.chosenLang = action.payload;
        }
    }
})


export const {chooseLanguage} = lang.actions;

export default lang.reducer;