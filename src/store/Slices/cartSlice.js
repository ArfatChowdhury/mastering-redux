import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0
    },

    reducers: {

        addToCart: (state, action) => {
            const { productId, product } = action.payload
            const existingProduct = state.items.find(item => item.productId === productId)

            console.log('existingProduct', existingProduct);

            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                state.items.push({
                    id: Date.now().toString(),
                    productId: productId,
                    quantity: 1,
                    name: product.name,    // 🟢 Store product name
                    price: product.price,  // 🟢 Store product price  
                    image: product.image

                })
            }
        },
        removeItem: (state, action) => {
            const { itemId } = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
        },

        updateQuantity: (state, action) => {
            const { itemId, quantity } = action.payload
            const item = state.items.find(item => item.id === itemId)

            if (item) {
                item.quantity = quantity
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
              item.quantity += 1
            }
          },
          decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
              if (item.quantity > 1) {
                item.quantity -= 1
              }
            }
        }
    }

})

export const { addToCart, removeItem, updateQuantity, clearCart,increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;