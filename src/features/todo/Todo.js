function Todo ({ handleChange, todos, handleAddTodo, 
    handleRemoveTodo, text, handleCheckedTodo, handleCompletedTodo,
    completed, handleShowCompleted, showCompleted }) {
    const listItems = showCompleted 
        ? completed.map(completedTodo => 
        <li key={completedTodo.id}>
            <input type="checkbox" 
                    id="check-list-item" 
                    name="list-item-checkbox"
                    onClick={() => handleCheckedTodo(completedTodo.id)}
                    />
                {completedTodo.text} 
            <button onClick={()=>handleRemoveTodo(completedTodo.id)}>X</button>
        </li>) 
        : todos.map(todo => 
        <li key={todo.id}
            class={todo.completed ? "line-through" : 'none'}>
            <input type="checkbox" 
                    id="check-list-item" 
                    name="list-item-checkbox"
                    onClick={() => handleCheckedTodo(todo.id)}
                    />
                {todo.text} 
            <button onClick={()=>handleRemoveTodo(todo.id)}>X</button>
        </li>)
    console.log("show heeeee", showCompleted)
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
            <div>
                <button>All</button>
                <button>Active</button>
                <button onClick={handleShowCompleted}>Completed</button>
            </div>
        </div>
    )
}

export default Todo