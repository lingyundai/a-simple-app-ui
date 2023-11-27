import { configureStore } from "@reduxjs/toolkit"
import { todoAdded } from "../features/todo/todoSlice"


const store = configureStore({
    reducer: {
        todo: todoAdded,
    }
})

export default store