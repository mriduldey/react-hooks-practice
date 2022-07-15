import useCounter from "../customHooks/useCounter";

export default function CounterOTwo() {
  const [count, increase, decrease] = useCounter();
  return (
    <>
      <div>Counter Two - {count}</div>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>Decreament</button>
    </>
  );
}
