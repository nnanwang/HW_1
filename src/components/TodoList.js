import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (event) => {
        event.preventDefault(); // Prevent form submission from reloading the page
        setTodos([...todos, input]);
        setInput(''); // Clear the input after adding
    };

    return (
        <div>
            <h3>My To-Do List</h3>
            <form onSubmit={addTodo}>
                <input value={input} onChange={e => setInput(e.target.value)} />
                <button type="submit">Add To-Do</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
