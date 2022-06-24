import { useState, useRef, useEffect, useCallback } from "react";

export default function Timer2() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const timerId = useRef(null);

  const tick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const reset = () => {
    setCount(0);
    setIsActive(false);
  };

  const toggle = () => {
    setIsActive((isActive) => {
      console.log("toggle", isActive);
      return !isActive;
    });
  };

  const stop = useCallback(() => clearInterval(timerId.current), []);

  const start = useCallback(() => {
    timerId.current = setInterval(tick, 1000);
  }, [tick]);

  useEffect(() => {
    console.log("use effect start");
    if (isActive) {
      start();
    } else if (!isActive) {
      stop();
    }

    return () => stop();
  }, [isActive, start, stop]); // useCallback for used functions | start(), stop()

  return (
    <>
      <h2> Timer With Function </h2>
      <div>{count}s</div>
      <button onClick={toggle}>{isActive ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
