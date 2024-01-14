import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    todos: [],
    completed: [],
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
                console.log("slice", todo.completed)
                if (todo.completed == true) {
                    state.completed.push(todo)
                } else {
                    state.completed = state.completed.filter((t) => t.id !== action.payload)
                }
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
        }
    }
})


export const { addTodo, removeTodo, checkTodo } = todoSlice.actions

export default todoSlice.reducer