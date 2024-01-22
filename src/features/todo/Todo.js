function Todo ({ handleChange, todos, handleAddTodo, 
    handleRemoveTodo, text, handleCheckedTodo,
    handleShowCompleted, showCompleted, completed, handleShowAll, 
    showActive, handleShowActive, handleClearCompleted }) {

    let todoMapper = todo => (
        <li key={todo.id}>
            <input type="checkbox" 
                    id="check-list-item" 
                    name="list-item-checkbox"
                    onClick={() => handleCheckedTodo(todo.id)}
                    />
                {todo.text} 
            <button onClick={()=>handleRemoveTodo(todo.id)}>X</button>
        </li>)

    let listItems
    
    if (showCompleted) {
        listItems = completed.map(todoMapper)
    } else if (showActive) {
        listItems = todos.filter(todo => !todo.completed).map(todoMapper)
    } else {
        listItems = todos.map(todoMapper)
    }

    console.log("showCompleted", showCompleted)

    return (
        <div>
            <div class="flex text-center">
                <div class="w-full h-64 bg-cover sm:mobile-header-image-dark">
                    <header class="">
                        <h1>TODO</h1>
                    </header>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Create a new todo..." 
                            onChange={handleChange}
                            value={text}
                        />
                        <button onClick={handleAddTodo}>Add</button>
                    </form>
                    <div>
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                    <div>
                        <button class="mr-[2vw]" 
                            onClick={handleShowAll}>All</button>
                        <button class="mr-[2vw]" 
                            onClick={handleShowActive}>Active</button>
                        <button onClick={handleShowCompleted}
                            class="mr-[2vw]">Completed</button>
                        <button class="mr-[2vw]" 
                            onClick={handleClearCompleted}>Clear Completed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo