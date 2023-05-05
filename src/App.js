import { nanoid } from "nanoid";
import { useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

import "./index.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [alert, setAlert] = useState({
    text: "",
    type: "",
    status: false,
  });

  const handleAlert = (text = "", type = "", status = false) => {
    setAlert({ text, type, status });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const newList = todos.map((item) => {
        if (item.id === currentId) {
          return { ...item, todo: todo };
        }
        return item;
      });
      setTodos(newList);
      handleAlert("Edited Successfully", "success", true);
      setIsEdit(false);
      setCurrentId(null);
    } else if (!todo) {
      handleAlert("Please enter the text", "error", true);
      return;
    } else {
      const id = nanoid();
      const newTodo = {
        todo,
        id,
      };
      setTodos([...todos, newTodo]);
      handleAlert("Added Successfully", "success", true);
    }

    setTodo("");
  };

  const handleDelete = (id) => {
    if (currentId) return;
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
    handleAlert("Deleted Successfully", "success", true);
  };

  const handleEdit = (id) => {
    const { todo } = todos.find((item) => item.id === id);

    setCurrentId(id);
    setIsEdit(true);
    setTodo(todo);
  };

  return (
    <div className="mx-auto w-[50vw] h-[100vh]  ">
      <TodoInput
        setTodo={setTodo}
        todo={todo}
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        alert={alert}
        handleAlert={handleAlert}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
