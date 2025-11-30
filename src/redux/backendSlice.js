import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: true
}

const backendSlice = createSlice({
    name: 'imtihon',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = !state.mode
        }
    }
});

export const {setMode} = backendSlice.actions;
export default backendSlice.reducer;