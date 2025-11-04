import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [
            { id: 1, name: 'iPhone 15', price: 999, image: '📱', category: 'Electronics' },
            { id: 2, name: 'MacBook Pro', price: 1299, image: '💻', category: 'Electronics' },
            { id: 3, name: 'AirPods', price: 199, image: '🎧', category: 'Electronics' },
            { id: 4, name: 'Coffee Mug', price: 15, image: '☕', category: 'Home' },
            { id: 5, name: 'Book', price: 25, image: '📚', category: 'Education' },
            { id: 6, name: 'T-Shirt', price: 29, image: '👕', category: 'Fashion' }
        ]
    },
    reducers:{

    }
})
export default productSlice.reducer