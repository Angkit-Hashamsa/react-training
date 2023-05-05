import React from "react";
import { useState } from "react";
const ObjectuseState = () => {
  const [employee, setEmployee] = useState({
    name: "Ankgit",
    age: "27",
    place: "acscsc",
  });

  const updatePlace = () => {
    setEmployee({
      ...employee,
      place: "Home",
    });
  };

  return (
    <div>
      age: {employee.age}
      <p>name: {employee.name}</p>
      <p>Place {employee.place}</p>
      <button className="btn" onClick={updatePlace}>
        Update
      </button>
    </div>
  );
};

export default ObjectuseState;
