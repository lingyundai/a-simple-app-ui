function Todo ({ handleChange, handleSubmit, todos, deleteItem }) {
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
                    <button onClick={handleSubmit}>Add</button>
                </header>
                <ul>
                    {todos.map(i => (
                        <div>
                            <li key={i.id}>{i.item}</li>
                            <button onClick={() => deleteItem(i)}>Delete</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo;