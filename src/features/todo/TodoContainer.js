import { useState } from "react";
import Todo from "./Todo";

function TodoContainer () {
    let nextId = 0
    const [item, setItem] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = () => {
        setTodos([
            ...todos,
            {id: nextId++, item: item}
        ])
    }

    const deleteItem = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    }

    console.log(todos)

    return (
        <Todo 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            todos={todos}
            item={item}
            deleteItem={deleteItem}
        />
    )
}

export default TodoContainer;