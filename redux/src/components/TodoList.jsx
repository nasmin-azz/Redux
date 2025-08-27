import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  let todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        // <li key={todo.id}>{todo.text}</li>
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
