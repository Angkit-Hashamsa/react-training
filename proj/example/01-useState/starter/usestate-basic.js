import React from "react";
import { useState } from "react";
const UseState = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    setTimeout(() => {
      console.log("I have clikc");
      // setCount(count + 1);
      setCount((prevState) => prevState + 1);
    }, 3000);
    // setCount(count + 1);
    // setCount(count + 1);
  };
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      Count:
      {count}
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default UseState;
