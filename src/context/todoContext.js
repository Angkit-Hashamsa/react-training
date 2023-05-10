import React, { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

export const TodoContext = createContext();

export const Provider = ({ children }) => {
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
    <TodoContext.Provider
      value={{
        alert,
        todo,
        todos,
        isEdit,
        currentId,
        setTodo,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleAlert,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
