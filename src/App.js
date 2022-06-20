import "./styles.css";
import CounterClass from "./useState/CounterClass";
import Counter from "./useState/Counter";

export default function App() {
  return (
    <div className="App">
      <CounterClass />
      <hr />
      <Counter />
    </div>
  );
}
