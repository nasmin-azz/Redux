import { useSelector ,useDispatch } from "react-redux";
import "./App.css";
import { INCREMENT, DECREMENT } from "./actions";
function App() {
let counter = useSelector((state) => state.counter);
console.log(counter)
let dispatch = useDispatch();
console.log(dispatch)

  return (
    <div>
      <h1>Counter value is : {counter} </h1>
      <button onClick={()=>{dispatch(INCREMENT())}}>increment</button>
      <button onClick={()=>{dispatch(DECREMENT())}}>decrement</button>
    </div>
  );
}

export default App;
