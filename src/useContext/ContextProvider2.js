import { createContext } from "react";
import ComponentB from "./ExampleComponents1/ComponentB";

export const UserContext = createContext();
export const FavouriteHeroContext = createContext();

export default function ContextProvider2() {
  return (
    <>
      <div>Component UseContextA</div>
      <UserContext.Provider value={"Mridul"}>
        <FavouriteHeroContext.Provider value={"Luffy"}>
          <ComponentB />
        </FavouriteHeroContext.Provider>
      </UserContext.Provider>
    </>
  );
}

// Note: Uncomment ComponentE2 or UseContext import in ComponentD.js
