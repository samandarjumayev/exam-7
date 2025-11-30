import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "./api";

export const fetchAllProducts = createAsyncThunk('fetchProducts/products', async () => {
    const resp = await baseURL.get('/products');
    console.log(resp.data.products)
    return resp.data.products;
});

const initialState = {
    mode: true,
    isAdmin: !!localStorage.getItem('isAdmin'),
    isAuth: !!localStorage.getItem("isAuth"),
    user: JSON.parse(localStorage.getItem('user')) || {name: 'hech kim'},
    products: [],
    isLoading: false,
    error: null
}

const backendSlice = createSlice({
    name: 'imtihon',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = !state.mode
        },
        login: (state) => {
            state.isAuth = true;
            localStorage.setItem('isAuth', true);
        },
        admin: (state) => {
            state.isAdmin = true;
            localStorage.setItem('isAdmin', true);
            localStorage.setItem('user', 'Admin')
        },
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem('isAuth');
        },
        signup: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isAuth', true);
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        builder.addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Xatolik'
        })
    }
});

export const {setMode, login, admin, logout, signup} = backendSlice.actions;
export default backendSlice.reducer;