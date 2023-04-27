import React, { useState } from "react";
import { data } from "../data";
const ArrayuseState = () => {
  const [persons, setPersons] = useState(data);

  const removePerson = (id) => {
    let newPerson = persons.filter((person) => person.id !== id);
    setPersons(newPerson);
  };

  const clearAll = () => {
    setPersons([]);
  };

  return (
    <div>
      {persons.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", gap: "1rem", margin: "1rem" }}
        >
          <div>{item.name}</div>
          <button onClick={() => removePerson(item.id)}>remove</button>
        </div>
      ))}
      <button onClick={clearAll}>Clear</button>
    </div>
  );
};

export default ArrayuseState;
