import React from "react";
import { useEffect } from "react";
import { useTodo } from "../context/todoContext";
const Alert = () => {
  const { alert, handleAlert } = useTodo();
  const color = alert.type === "success" ? "green" : "red";

  useEffect(() => {
    let id;
    if (alert.status) {
      id = setTimeout(() => {
        handleAlert("", "", false);
      }, 9000);
    }
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.status]);

  return (
    <div className="text-center">
      {/* <p className={`text-${color}-600`}>{alert.text}</p> */}
      <p className={`${color}`}>{alert.text}</p>
    </div>
  );
};

export default Alert;
