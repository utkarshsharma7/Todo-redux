import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        // addTodo will always give two values i.e., state and action
        addTodo: (state, action) => {
            const todo = {
              id: nanoid(),
              text: action.payload,
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {

            
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer;