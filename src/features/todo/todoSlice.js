import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    todos: [],
    count: 0,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: state.id,
                text: action.payload
            }
            state.todos.push(todo)
            state.id += 1
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            state.count -= 1;
        }
    }
})


export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer