import { useState } from "react"
import Todo from "./Todo"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, checkTodo } from "./todoSlice"

function TodoContainer () {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    console.log(todos)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleCheckedTodo = (id) => {
        dispatch(checkTodo(id))
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
            handleRemoveTodo={handleRemoveTodo}
            handleCheckedTodo={handleCheckedTodo}
            todos={todos}
            text={text}
        />
    )
}

export default TodoContainer