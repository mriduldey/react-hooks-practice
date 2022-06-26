import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: payload,
        error: ""
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: payload
      };
    default:
      return state;
  }
};

export default function UseReducerDataFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((post) => dispatch({ type: "FETCH_SUCCESS", payload: post }))
      .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err.message }));
  });

  return <div>{state.post.title}</div>;
}
