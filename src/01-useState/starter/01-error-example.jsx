import { useState } from "react";
const ErrorExample = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        height: "100vh",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>UsState</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button className="btn" onClick={decrease}>
          Decrease
        </button>
        <div>{count}</div>
        <button className="btn" onClick={handleClick}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default ErrorExample;
