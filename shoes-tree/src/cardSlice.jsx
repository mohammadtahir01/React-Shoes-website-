import { createSlice } from "@reduxjs/toolkit";

const ShoesSlice=createSlice({
    name:"card",

    initialState:{
        Task:[]
    },
    reducers:{
        AddtoCard:(state,action)=>{
           let val = state.Task.filter((key)=> key.id === action.payload.id)

           if(val.length >=1){
            alert("already added!!")
           }else{
            state.Task.push(action.payload)
           }
        }
    }
})
export const {AddtoCard} = ShoesSlice.actions;
export default ShoesSlice.reducer;