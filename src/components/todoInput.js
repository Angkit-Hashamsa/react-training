import React from "react";
import Alert from "./alert";
const TodoInput = ({
  todo,
  setTodo,
  handleSubmit,
  isEdit,
  alert,
  handleAlert,
}) => {
  return (
    <div className="w-[90%] mx-auto mt-10">
      {alert.status && <Alert alert={alert} handleAlert={handleAlert} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full  shadow-md flex items-center gap-2 justify-center rounded px-8 pt-6 pb-8 mb-4"
      >
        <input
          className="shadow appearance-none w-[70%] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add Todo"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {isEdit ? "Edit" : "Add todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
