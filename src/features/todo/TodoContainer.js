import { useState } from "react"
import Todo from "./Todo"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, checkTodo, clearCompleted } from "./todoSlice"

function TodoContainer () {
    const todos = useSelector((state) => state.todo.todos)
    const completed = useSelector(state => state.todo.completed)
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const [showCompleted, setShowCompleted] = useState(false)
    const [showActive, setShowActive] = useState(false)
    const [showAll, setShowAll] = useState(false)

    console.log("todos", todos)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleCheckedTodo = (id) => {
        dispatch(checkTodo(id))
    }

    console.log("completed list", completed)

    const handleShowCompleted = () => {
        setShowCompleted(true)
        setShowActive(false)
        setShowAll(false)
    }

    const handleShowActive = () => {
        setShowActive(true)
        setShowCompleted(false)
        setShowAll(false)
    }

    const handleShowAll = () => {
        setShowAll(true)
        setShowActive(false)
        setShowCompleted(false)
    }

    const handleClearCompleted = () => {
        dispatch(clearCompleted())
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
            handleShowActive={handleShowActive}
            handleShowCompleted={handleShowCompleted}
            handleShowAll={handleShowAll}
            handleClearCompleted={handleClearCompleted}
            completed={completed}
            showAll={showAll}
            showActive={showActive}
            showCompleted={showCompleted}
            todos={todos}
            text={text}
        />
    )
}

export default TodoContainer