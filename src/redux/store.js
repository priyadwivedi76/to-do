import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice.jsx'
export const store=configureStore({
    reducer:{
        tasks:taskReducer,
    }
})