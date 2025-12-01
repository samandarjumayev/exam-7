import { configureStore } from "@reduxjs/toolkit";
import backendReducer from './redux/backendSlice';
import usersbackendReducer from './redux/usersSlice';

export const reduxStore = configureStore({
    reducer: {
        backend: backendReducer,
        usersBackend: usersbackendReducer
    }
})