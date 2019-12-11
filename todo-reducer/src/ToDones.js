import React from "react";

export function ToDones({ todo, dispatch }){
    const toggleDone = () => {
        dispatch({
            type: "TOGGLE_DONE",
            payload: todo.id
        });
    };

    return(
        <div onClick={toggleDone}
        className={`todo${todo.done ? "done" : ""}`}
        style={{ textDecoration: todo.done ? "line-through" : ""}}>
        <p>{todo.item}</p>
        </div>
    );
}