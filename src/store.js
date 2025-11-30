import { configureStore } from "@reduxjs/toolkit";
import backendReducer from './redux/backendSlice'

export const reduxStore = configureStore({
    reducer: {
        backend: backendReducer
    }
})