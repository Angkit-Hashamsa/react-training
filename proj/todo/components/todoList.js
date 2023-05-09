import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-center text-gray-700 text-xl font-bold">Todo List</h2>
      <section className="w-[100%]">
        {todos.map((item) => {
          return (
            <article
              className="flex mx-3 my-3 py-3 items-center justify-between px-4 shadow-lg rounded-sm"
              key={item.id}
            >
              <p className="text-lg">{item.todo}</p>
              <section className="flex items-center gap-4">
                <AiFillEdit
                  className="text-lg text-green-600 hover:cursor-pointer"
                  onClick={() => handleEdit(item.id)}
                />
                <FaTrash
                  className="text-lg text-red-600 hover:cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </section>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default TodoList;
