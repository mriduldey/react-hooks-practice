import useCounter from "../customHooks/useCounter";

export default function CounterOne() {
  const [count, increase, decrease] = useCounter();
  return (
    <>
      <div>Counter One - {count}</div>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>Decreament</button>
    </>
  );
}
