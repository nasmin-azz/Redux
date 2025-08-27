function increaseCount() {
  return {
    type: "INCREASE_COUNT",
  };
}

function decreaseCount() {
  return {
    type: "DECREASE_COUNT",
  };
}
export { increaseCount, decreaseCount };