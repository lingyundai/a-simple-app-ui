function Todo ({ handleChange, addTodo, todoList, deleteItem }) {
    return (
        <div>
            <div>
                <header>
                    <h1>TODO</h1>
                    <input 
                        type="text" 
                        placeholder="Create a new todo..." 
                        onChange={handleChange}
                    />
                    <button onClick={addTodo}>Add</button>
                </header>
                <ul>
                    {todoList.map((item) => (
                        <div>
                            <li key={item.id}>{item.todo}</li>
                            <button onClick={() => deleteItem(item)}>Delete</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo