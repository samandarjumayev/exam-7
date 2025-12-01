import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "./api";

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    const resp = await baseURL.get('/users');
    // Ataydan kechikib userlar chiqishi uchun shunaqa qildim ↙️ Loader sal yaxshiroq ko'rinsin deb
    await new Promise(resolve => setTimeout(resolve, 2000));
    // console.log(resp.data.users);
    return resp.data.users;
});

export const fetchSingleUser = createAsyncThunk('users/fetchSingleUser', async (id) => {
    const resp = await baseURL.get(`/users/${id}`);
    console.log(resp.data)
    return resp.data;
})

const initialState = {
    users: [],
    isLoading: false,
    error: false,
    singleUser: null,
    singleLoading: false,
    singleError: false
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
        });

        // Single
        builder.addCase(fetchSingleUser.pending, (state) => {
            state.singleLoading = true;
        })
        builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
            state.singleLoading = false;
            state.singleUser = action.payload;
        })
        builder.addCase(fetchSingleUser.rejected, (state) => {
            state.singleLoading = false;
            state.singleError = true;
        })
    }
});

export const {deleteUser} = usersSlice.actions;
export default usersSlice.reducer;