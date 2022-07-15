import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((prevCount) => prevCount + 1);
  const decrease = () => setCount((prevCount) => prevCount - 1);

  return [count, increase, decrease];
}
