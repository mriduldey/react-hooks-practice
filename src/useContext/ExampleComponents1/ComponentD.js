// to run ContextProvider2.js with useEffect hook
import UseContext1 from "./UseContext1";

// to run ContextProvider.js
// import ComponentE1 from "./ComponentE1";

// to run ContextProvider2.js
// import ComponentE2 from "./ComponentE2";

export default function ComponentD() {
  return (
    <>
      <div>Component D</div>
      {/* <ComponentE2 /> */}
      {/* <ComponentE1 /> */}
      <UseContext1 />
    </>
  );
}
