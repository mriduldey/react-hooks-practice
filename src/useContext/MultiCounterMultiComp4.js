import { useReducer, createContext } from "react";
import UseReducerCounter from "./ExampleComponents1/4UseReducerCounter";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export const CountContext = createContext();
export const dispatchContext = createContext();

export default function MultiCounterMultiComp4() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CountContext.Provider value={count}>
        <div>{count}</div>
        <dispatchContext.Provider value={dispatch}>
          <UseReducerCounter />
          <UseReducerCounter />
          <UseReducerCounter />
        </dispatchContext.Provider>
      </CountContext.Provider>
    </div>
  );
}
