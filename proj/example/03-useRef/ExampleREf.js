import React, { useEffect, useRef } from "react";

const ExampleRed = () => {
  const box = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log(box.current);
  }, [box]);

  const changeCOlor = () => {
    box.current.style.background = "blue";
  };

  const checkLetter = () => {
    const myText = inputRef.current.value;
    console.log(myText);
  };

  return (
    <div>
      Ussss
      <button onClick={changeCOlor}>Change colour</button>
      <div
        ref={box}
        style={{ background: "red", width: "20rem", height: "20rem" }}
      ></div>
      <input type="text" ref={inputRef} />
      <button onClick={checkLetter}>check my letters</button>
    </div>
  );
};

export default ExampleRed;
