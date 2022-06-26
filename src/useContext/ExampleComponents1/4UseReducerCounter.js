import { useContext } from "react";
import { CountContext, dispatchContext } from "../MultiCounterMultiComp4";

export default function UseReducerCounter() {
  const count = useContext(CountContext);
  const dispatch = useContext(dispatchContext);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
