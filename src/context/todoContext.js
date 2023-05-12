import React, { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

export const TodoContext = createContext();

export const Provider = ({ children }) => {
  return (
    <TodoContext.Provider
      value={{
        hi: "hhhh",
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
