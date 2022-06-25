import { createContext } from "react";
import ComponentB from "./ExampleComponents1/ComponentB";

export const UserContext = createContext();

export default function ContextProvider() {
  return (
    <>
      <UserContext.Provider value={"Mridul"}>
        <div>Component UseContextA</div>
        <ComponentB />
      </UserContext.Provider>
    </>
  );
}

// Note: Uncomment ComponentE1 import in ComponentD.js
