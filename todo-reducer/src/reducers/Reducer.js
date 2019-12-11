import React from 'react';

export const toDo = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

export const reducer = (state, action) => {
  
  switch (action.type){
    case 'ADD_TODO':
      return [...state, {item:action.payload, sompleted: false, id: Date.now() }];
           
    case 'TOGGLE_DONE':
      return state.map(todo => {
        if (todo.id === action.payload){
          return {...todo, done: !todo.done
          }
        }
        return todo;
      })

      case 'CLEAR_DONE':
        return state.filter(todo => !todo.done);

        default: 
        return state;
  }
}