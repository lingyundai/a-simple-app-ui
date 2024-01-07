import { useState } from "react"
import Todo from "./Todo"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo } from "./todoSlice"

function TodoContainer () {
    const todos = useSelector((state) => state.todo.todos)
    console.log(todos)
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text))
            setText("")
        }
    }

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <Todo 
            handleChange={handleChange}
            handleAddTodo={handleAddTodo}
            handleRemoveTodo ={handleRemoveTodo}
            todos={todos}
            text={text}
        />
    )
}

export default TodoContainer