import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../store/reducer";
const initialState = {
  count: 0,
  name: "",
};

export const TodoContext = createContext();

export const Provider = ({ children }) => {
  const [myState, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={[myState, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
