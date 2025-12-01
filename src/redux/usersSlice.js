import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "./api";

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    const resp = await baseURL.get('/users');
    // Ataydan kechikib userlar chiqishi uchun shunaqa qildim ↙️ Loader sal yaxshiroq ko'rinsin deb
    // await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(resp.data.users);
    return resp.data.users;
})

const initialState = {
    users: [],
    isLoading: false,
    error: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            return {...state, users: [...state.users.filter(item => item.id !== action.payload)]}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        builder.addCase(fetchAllUsers.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
});

export const {deleteUser} = usersSlice.actions;
export default usersSlice.reducer;