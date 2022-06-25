import { useReducer, useState } from "react";

const initialState = {
  count1: 0,
  count2: 0
};
const reducer = (state, action) => {
  const [actionType, counterType] = action;
  switch (actionType) {
    case "increment": {
      const count = state[counterType];
      return {
        ...state,
        [counterType]: count + 1
      };
    }
    case "decrement": {
      const count = state[counterType];
      return {
        ...state,
        [counterType]: count - 1
      };
    }
    case "reset":
      return {
        ...state,
        [counterType]: 0
      };
    default:
      return state;
  }
};

export default function UseReducerCounter2() {
  const [counts, dispatch] = useReducer(reducer, initialState);
  const [counterType, SwitchCounterType] = useState("count1");

  return (
    <div>
      <select onChange={(e) => SwitchCounterType(e.target.value)}>
        <option value="count1">Count1</option>
        <option value="count2">Count2</option>
      </select>
      <div>{counts.count1}</div>
      <div>{counts.count2}</div>
      <button onClick={() => dispatch(["increment", counterType])}>
        Increment
      </button>
      <button onClick={() => dispatch(["decrement", counterType])}>
        Decrement
      </button>
      <button onClick={() => dispatch(["reset", counterType])}>Reset</button>
    </div>
  );
}
