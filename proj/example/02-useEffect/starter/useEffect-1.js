import React from "react";
import { useEffect, useState } from "react";
const UseEffect = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("I am inside useffect");
    if (toggle) {
      setCount((count) => count + 1);
    }
  }, [toggle]);
  // useEffect(() => {
  //   console.log("I am called here");
  // }, []);

  return (
    <div>
      {console.log("I got rendered")}
      UseEffect count: {count}
      {toggle && <h2> I am Present </h2>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default UseEffect;
