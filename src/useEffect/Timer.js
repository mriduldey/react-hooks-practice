import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const timeId = useRef(null);
  const tick = () => setTime(new Date());

  const stop = () => clearInterval(timeId.current);
  const start = () => {
    timeId.current = setInterval(tick, 1000);
  };

  useEffect(() => {
    timeId.current = setInterval(tick, 1000);

    // unmount
    return () => stop();
  }, [time]);
  return (
    <>
      <h2>Timer Fucntional Component</h2>
      <div>{time.toLocaleTimeString()}</div>
      <button onClick={stop}>Stop</button>
      <button onClick={start}>Start</button>
    </>
  );
}
