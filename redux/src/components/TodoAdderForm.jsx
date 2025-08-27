import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const TodoAdderForm = () => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();
  return (
    <div>
      <input
        value={text}
        onChange={() => {
          setText(event.target.value);
        }}
        type="text"
        placeholder="type sth..."
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdderForm;
