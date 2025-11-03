import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        items:[],
    },
    reducers:{

        addTodo: (state, action) =>{
            const newTodo ={
                id: Date.now().toString(),
                text: action.payload,
                completed: false,
            }
            state.items.push(newTodo)
        }
    }
})


export const {addTodo} = todoSlice.actions
export default todoSlice.reducer