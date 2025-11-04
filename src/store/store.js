import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slices/todoSlice'
import productReducer from './Slices/ProductSlice'
import cartReducer from './Slices/cartSlice'

export const store = configureStore({
    reducer:{
        todos: todoReducer,
        products: productReducer,
        cart: cartReducer
    }
})