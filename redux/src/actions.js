function addTodo(text) {
  return {
    type: "ADD",
    payload: text,
  };
}

function removeTodo(id) {
  return {
    type: "REMOVE",
    payload: id,
  };
}
export { addTodo, removeTodo };
