import { useState } from "react";
import Todo from "./Todo";

function TodoContainer () {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <Todo 
            handleChange={handleChange}
        />
    )
}

export default TodoContainer;