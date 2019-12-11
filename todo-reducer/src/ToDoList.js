import React, { useReducer } from 'react';
import { reducer, toDo } from "./reducers/Reducer";
import { ToDones } from "./ToDones";
import { ToDoTemplate } from "./ToDoTemplate";

export const ToDoList = () => {
    const [state, dispatch] = useReducer(reducer, toDo);

    return (
        <section>
            <ToDoTemplate dispatch={ dispatch } />
            {state.map(toDo => {
                return <ToDones 
                todo={ toDo }
                dispatch={ dispatch }
                key = { toDo.id }
                />
            })} 
        </section>
    )
}