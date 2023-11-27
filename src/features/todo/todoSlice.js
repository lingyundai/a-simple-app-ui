import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoAdded(state, action) {
            const { id, item } = action.payload
            state.todos.push({
                id,
                item,
                completed: false
            })
        }
    }
})


export const { todoAdded } = todoSlice.actions

export default todoSlice.reducer