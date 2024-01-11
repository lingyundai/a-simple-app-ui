import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: state.id,
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
            state.id += 1
        },
        checkTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const { addTodo, removeTodo, checkTodo } = todoSlice.actions

export default todoSlice.reducer