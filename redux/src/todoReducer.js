import { v4 as uuidv4 } from "uuid";

import React from "react";
let initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, { id: uuidv4(), text: action.payload }],
      };
    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          //   return null;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
