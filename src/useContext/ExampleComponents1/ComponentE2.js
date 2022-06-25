import { UserContext, FavouriteHeroContext } from "../ContextProvider2";

export default function ComponentE1() {
  return (
    <>
      <div>Component E</div>
      <div>
        Value from UserContextA:
        <UserContext.Consumer>
          {(user) => (
            <FavouriteHeroContext.Consumer>
              {(hero) => <span>{" " + user + ", Hero " + hero}</span>}
            </FavouriteHeroContext.Consumer>
          )}
        </UserContext.Consumer>
        {}
      </div>
    </>
  );
}
