import { useState, useRef } from "react";

export default function Timer2() {
  const [count, setCount] = useState(0);
  const timerId = useRef(null);

  const tick = () => {
    setCount((count) => count + 1);
  };

  const start = () => {
    timerId.current = setInterval(tick, 1000);
  };

  const stop = () => clearInterval(timerId.current);

  const reset = () => {
    stop();
    setCount(0);
  };

  return (
    <>
      <h2> Timer With Function </h2>
      <div>{count}s</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
