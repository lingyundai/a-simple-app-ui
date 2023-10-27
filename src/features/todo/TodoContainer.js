import { useState } from "react"
import Todo from "./Todo"

function TodoContainer () {
    let nextId = 0
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const addTodo = () => {
        if (todo !== "") {
            setTodoList([
                ...todoList,
                {id: nextId++, todo: todo}
            ])
        }
    }

    const deleteItem = (text) => {
        const newTodos = todoList.filter((todo) => {
            return todo !== text
        })
        setTodoList(newTodos)
    }

    console.log(todoList)

    return (
        <Todo 
            handleChange={handleChange}
            addTodo={addTodo}
            todoList={todoList}
            todo={todo}
            deleteItem={deleteItem}
        />
    )
}

export default TodoContainer