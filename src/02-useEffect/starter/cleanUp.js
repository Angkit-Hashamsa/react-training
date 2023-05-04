import React from "react";
import { useEffect, useState } from "react";
const CleanUp = () => {
  const [isTodo, setIsTodo] = useState(false);

  return (
    <div>
      CleanUp
      <button onClick={() => setIsTodo(!isTodo)}>Toggle</button>
      {isTodo && <Todo />}
    </div>
  );
};

const Todo = () => {
  useEffect(() => {
    const timeID = setInterval(() => {
      console.log("hello");
    }, 1000);

    return () => {
      clearInterval(timeID);
    };
  }, []);
  // useEffect(() => {
  //   console.log("Run after mounting");

  //   return () => {
  //     console.log("ran after unmounting");
  //   };
  // }, []);
  return <h2>TODO {console.log("intial render")}</h2>;
};
export default CleanUp;
