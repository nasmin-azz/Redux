import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../actions";

const TodoItem = ({ todo }) => {
  let dispatch = useDispatch();
  return (
    <li>
      <span>{todo.text}</span>
      <button
        onClick={() => {
          dispatch(removeTodo(todo.id) );
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
