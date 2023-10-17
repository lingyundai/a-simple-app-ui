function Todo ({ handleChange }) {
    return (
        <div>
            <div>
                <header>
                    <h1>TODO</h1>
                    <input 
                        type="text" 
                        placeholder="Create a new todo..." 
                        onChange={(e) => handleChange(e)}
                    />
                </header>
                <form>

                </form>
            </div>
        </div>
    )
}

export default Todo;