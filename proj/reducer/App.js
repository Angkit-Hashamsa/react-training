// import TodoInput from "./components/todoInput";
// import TodoList from "./components/todoList";
import { useReducer } from "react";
import "./index.css";

const initialState = {
  count: 0,
  name: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload.number,
        name: action.payload.name,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload.number,
        name: action.payload.name,
      };
    default:
      break;
  }
  return state;
};

function App() {
  const [myState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mx-auto w-[50vw] h-[100vh]">
      Use Reducer
      <p>{myState.count}</p>
      {myState.name && <p>{myState.name}</p>}
      <div className="flex gap-3">
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
              payload: { name: "Increase", number: 3 },
            })
          }
        >
          Increase
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREMENT",
              payload: { name: "Decrease", number: 2 },
            })
          }
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
