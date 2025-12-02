import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "./api";

export const fetchAllProducts = createAsyncThunk('fetchProducts/products', async () => {
    const resp = await baseURL.get('/products');
    // Ataydan kechikib mahsulotlar chiqishi uchun shunaqa qildim ↙️ Loader sal yaxshiroq ko'rinsin deb
    await new Promise(resolve => setTimeout(resolve, 1000));
    return resp.data.products;
});

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (id) => {
    const product = await baseURL.get(`/products/${id}`);
    return product.data;
})

const initialState = {
    mode: true,
    isAdmin: !!localStorage.getItem('isAdmin'),
    isAuth: !!localStorage.getItem("isAuth"),
    user: null,
    products: [],
    categories: [],
    isLoading: false,
    error: null,
    oneProduct: [],
    oneProductLoading: false,
    oneProductError: false
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
        admin: (state, action) => {
            state.isAdmin = true;
            localStorage.setItem('isAdmin', true);
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            localStorage.removeItem('isAuth');
            localStorage.removeItem('isAdmin')
        },
        signup: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isAuth', true);
        },
        deleteProduct: (state, action) => {
            return {...state, products: [...state.products.filter(item => item.id !== action.payload)]}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            let unikal = new Set();
            action.payload.forEach(item => {
                unikal.add(item.category)
            })
            state.categories = [...unikal];
        })
        builder.addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });

        // Single Product
        builder.addCase(fetchSingleProduct.pending, (state) => {
            state.oneProductLoading = true;
        })
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.oneProductLoading = false;
            state.oneProduct = action.payload;
        })
        builder.addCase(fetchSingleProduct.rejected, (state) => {
            state.oneProductLoading = false;
            state.oneProductError = true;
        })
    }
});

export const {setMode, login, admin, logout, signup, deleteProduct} = backendSlice.actions;
export default backendSlice.reducer;