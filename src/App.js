import "./styles.css";
import CounterOne from "./CustomHooks/Counter/CounterOne";
import CounterTwo from "./CustomHooks/Counter/CounterTwo";

export default function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}
