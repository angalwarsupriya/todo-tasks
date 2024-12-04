import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";

const store = configureStore({
    reducer:{
        tasksList : tasksSlice.reducer
    } 
})


export default store