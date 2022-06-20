import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleIncrease = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h2>Counter made with function</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <div>{count}</div>
      <button onClick={handleIncrease}>Increase</button>
    </>
  );
}
