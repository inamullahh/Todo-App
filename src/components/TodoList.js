import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState([])

    // Function to create a todo.
    const addTodo = todo => {

        // If there is no text in the input field, Do nothing.
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    };

    // Function to edit a todo.
    const updateTodo = (todoId, newValue) => {

        // If there is no text in the input field, Do nothing.
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }



    // Function to remove a todo.
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }



    // Create a complete Todo function.
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }




    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList