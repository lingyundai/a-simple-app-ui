import { useState } from "react"
import Todo from "./Todo"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, checkTodo } from "./todoSlice"

function TodoContainer () {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const [completed, setCompleted] = useState([])
    const [showCompleted, setShowCompleted] = useState(false)

    console.log(todos)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleCheckedTodo = (id) => {
        dispatch(checkTodo(id))
        handleCompletedTodo()
    }

    const handleCompletedTodo = () => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].completed == true) {
                const completedTodos = todos.filter(todo => todo.completed)
                setCompleted(completedTodos)
                console.log("here", completedTodos)
            }
        }
    }

    console.log("completed list", completed)

    const handleShowCompleted = () => {
        setShowCompleted(true)
    }
    console.log("showww", showCompleted)

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
            // handleCompletedTodo={handleCompletedTodo}
            completed={completed}
            showCompleted={showCompleted}
            todos={todos}
            text={text}
        />
    )
}

export default TodoContainer