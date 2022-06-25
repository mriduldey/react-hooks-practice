import { useContext } from "react";
import { UserContext, FavouriteHeroContext } from "../ContextProvider2";

export default function UseContext1() {
  const user = useContext(UserContext);
  const hero = useContext(FavouriteHeroContext);
  return (
    <>
      <div>Component E</div>
      <div>Value from UserContextA: {`${user}, Hero - ${hero}`}</div>
    </>
  );
}
