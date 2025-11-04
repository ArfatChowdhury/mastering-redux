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
            // state.items.push(newTodo)
            state.items = [...state.items, newTodo]
        },
        

        handleDelete: (state, action) =>{
            state.items =state.items.filter(item => item.id !== action.payload)
        },

        toggleTodo : (state, action) =>{
            const todo = state.items.find(item => item.id == action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
})


export const {addTodo, handleDelete,toggleTodo} = todoSlice.actions
export default todoSlice.reducer