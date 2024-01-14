import { useState } from "react"
import Todo from "./Todo"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, checkTodo } from "./todoSlice"

function TodoContainer () {
    const todos = useSelector((state) => state.todo.todos)
    const completed = useSelector(state => state.todo.completed)
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const [showCompleted, setShowCompleted] = useState(false)

    console.log("todos", todos)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleCheckedTodo = (id) => {
        dispatch(checkTodo(id))
    }

    console.log("completed list", completed)

    const handleShowCompleted = () => {
        setShowCompleted(!showCompleted)
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
            handleShowCompleted={handleShowCompleted}
            completed={completed}
            showCompleted={showCompleted}
            todos={todos}
            text={text}
        />
    )
}

export default TodoContainer