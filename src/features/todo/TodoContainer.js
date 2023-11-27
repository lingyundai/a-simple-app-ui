import { useEffect, useState } from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux"
import { todoAdded } from "./todoSlice"

function TodoContainer () {
    const todoAdd = useSelector(todoAdded)

    let nextId = 0
    const [todo, setTodo] = useState(todoAdd)
    // const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    // const addTodo = () => {
    //     if (todo !== "") {
    //         setTodoList([
    //             ...todoList,
    //             {id: todoAdd.payload.id, todo: todo}
    //         ])
    //     }
    // }

    // const deleteItem = (text) => {
    //     const newTodos = todoList.filter((todo) => {
    //         return todo !== text
    //     })
    //     setTodoList(newTodos)
    // }
    useEffect(() => {
        if (todo !== "") {
            setTodo(todoAdd)
        }
    }, [todoAdd])

    // console.log(todoList)

    return (
        <Todo 
            handleChange={handleChange}
            // addTodo={addTodo}
            // todoList={todoList}
            todo={todo}
            // deleteItem={deleteItem}
        />
    )
}

export default TodoContainer