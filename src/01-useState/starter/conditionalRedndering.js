import React from "react";
import { useState } from "react";
const ConditionalRedndering = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isColorRed, setIscolorRed] = useState(false);
  const [letter, setLetter] = useState();
  console.log({ letter });
  return (
    <div>
      ConditionalRedndering
      {isOpen && <h2>Yes its open</h2>}
      <h2 className={`${isColorRed ? "red" : "yellow"}`}>
        {isColorRed ? "Red" : "yellow"}
      </h2>
      <h2>show some letter : {letter || "default letter"}</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button className="btn" onClick={() => setIsOpen(true)}>
          open
        </button>
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          toggle
        </button>
        <button className="btn" onClick={() => setIscolorRed(!isColorRed)}>
          toggleColur
        </button>
        <button className="btn" onClick={() => setLetter("Hey thier")}>
          add text
        </button>
      </div>
    </div>
  );
};

export default ConditionalRedndering;
// &&
// ?
// ||
