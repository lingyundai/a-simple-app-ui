import { useState } from "react"

function Todo ({ handleChange, todos, handleAddTodo, 
    handleRemoveTodo, text, handleCheckedTodo }) {
    const listItems = todos.map(todo => 
        <li key={todo.id}>
            <input type="checkbox" 
                    id="check-list-item" 
                    name="list-item-checkbox"
                    onClick={() => handleCheckedTodo(todo.id)}
                    />
                {todo.text} 
            <button onClick={()=>handleRemoveTodo(todo.id)}>X</button>
        </li>)
    return (
        <div>
            <div>
                <header>
                    <h1>TODO</h1>
                    <input 
                        type="text" 
                        placeholder="Create a new todo..." 
                        onChange={handleChange}
                        value={text}
                    />
                    <button onClick={handleAddTodo}>Add</button>
                </header>
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}

export default Todo