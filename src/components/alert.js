import React from "react";
import { useEffect } from "react";
const Alert = ({ alert, handleAlert }) => {
  const color = alert.type === "success" ? "green" : "red";

  useEffect(() => {
    let id;
    if (alert.status) {
      id = setTimeout(() => {
        handleAlert("", "", false);
      }, 3000);
    }
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.status]);

  return (
    <div className="text-center">
      <p className={`text-${color}-600`}>{alert.text}</p>
    </div>
  );
};

export default Alert;
