import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0
    },

    reducers:{

        addToCart: (state, action) =>{
            const {productId} = action.payload
            const existingProduct = state.items.find(item => item.productId === productId)

            console.log('existingProduct', existingProduct);
            
            if(existingProduct){
                existingProduct.quantity +=1
            }else{
                state.items.push({
                    id: Date.now().toString(),
                    productId: productId,
                    quantity: 1,
                    
                })
            }
        },
        removeItem: (state, action) =>{
            const {itemId} = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
        },
        
        updateQuantity: (state, action)=>{
            const {itemId, quantity} = action.payload
            const item = state.items.find(item => item.id === itemId)

            if (item) {
                item.quantity = quantity
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
    
})

export const { addToCart, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;