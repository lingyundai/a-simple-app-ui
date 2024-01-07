function Todo ({ handleChange, todos, handleAddTodo, handleRemoveTodo, text }) {
    const listItems = todos.map(todo => 
        <li key={todo.id}>
            {todo.text} 
            <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
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