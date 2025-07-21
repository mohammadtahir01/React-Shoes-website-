import { createSlice } from "@reduxjs/toolkit";

const ShoesSlice=createSlice({
    name:"card",

    initialState:{
       CardAdd:[]
    },
    reducer:{
        addtoCard:(state,action)=>{
            state.CardAdd.push(action.payload)
        }
    }
})
export const {addtoCard} = ShoesSlice.actions;
export default ShoesSlice.reducer
