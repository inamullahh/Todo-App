import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    // Create const called input to store the todo value
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    // Change handler
    const handleChange = e => {
        setInput(e.target.value);
    };

    // Submit handler
    const handleSubmit = e => {

        // Stops from refreshing the page on pressing the button
        e.preventDefault();

        props.onSubmit({
            // Id generator
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>

            {props.edit ? (
                <>
                    <input type="text"
                        placeholder="Update your item"
                        value={input} name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    {/* Create a button for submit */}
                    <button className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    {/* Add an inpput and set its value to the input*/}
                    < input type="text"
                        placeholder="Add a todo"
                        value={input} name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    {/* Create a button for submit */}
                    <button button className="todo-button" > Add a todo</button>
                </>
            )}

        </form >
    )
}

export default TodoForm