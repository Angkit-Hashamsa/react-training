// import TodoInput from "./components/todoInput";
// import TodoList from "./components/todoList";
import { useReducer } from "react";
import "./index.css";
import { decrement, increment } from "./store/action";
import { reducer } from "./store/reducer";

const initialState = {
  count: 0,
  name: "",
};

function App() {
  const [myState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mx-auto w-[50vw] h-[100vh]">
      Use Reducer
      <p>{myState.count}</p>
      {myState.name && <p>{myState.name}</p>}
      <div className="flex gap-3">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
