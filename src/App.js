import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import "./index.css";

function App() {
  return (
    <div className="mx-auto w-[50vw] h-[100vh]  ">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
