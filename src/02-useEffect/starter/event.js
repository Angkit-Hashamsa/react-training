import React from "react";
import { useEffect, useState } from "react";
const Event = () => {
  const [isTodo, setIsTodo] = useState(false);

  return (
    <div>
      CleanUp
      <button onClick={() => setIsTodo(!isTodo)}>Toggle</button>
      {isTodo && <Todo />}
      <div
        style={{
          height: "100vh",
          border: "2px solid red",
          width: "100vh",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          height: "100vh",
          border: "2px solid red",
          width: "100vh",
          background: "blue",
        }}
      ></div>
    </div>
  );
};

const Todo = () => {
  const onScroll = () => {
    console.log(" i am scrolling");
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <h2>
      TODO {console.log("intial render")}
      <div
        style={{
          height: "100vh",
          border: "2px solid red",
          width: "100vh",
          background: "yellow",
        }}
      >
        <h2>TODO scroll</h2>
      </div>
      <div
        style={{
          height: "100vh",
          border: "2px solid red",
          width: "100vh",
          background: "blue",
        }}
      >
        <h2>TODO scroll</h2>
      </div>
    </h2>
  );
};
export default Event;
