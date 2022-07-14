import { useState } from "react";
import useDocTitle from "../customHooks/useDocTitle";

export default function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useDocTitle(count);

  return <button onClick={() => setCount(count + 1)}>Count - {count}</button>;
}
