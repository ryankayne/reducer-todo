import React, { useState } from "react";

export const ToDoTemplate = ({ dispatch }) => {
    const [item, setItem] = useState("");
    

    const handleChanges = e => {
        setItem(e.target.value);
    };

    const addToDo = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        });
        setItem("");
    };

    const clearDone = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_DONE"
        });
    };

    return (
        <div>
            <form onSubmit={addToDo}>
                <label htmlFor="todo" hidden>
                    To Do
                </label>
                <input  name="todo" 
                        placeholder="Task"
                        onChange={handleChanges}
                        value={item}
                        id = {Date.now()}
                />
                
                <button>Add To Do</button>
                <button onClick={clearDone}>Clear Finished</button>
            </form>
        </div>
    );
}