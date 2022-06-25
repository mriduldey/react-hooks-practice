import { UserContext } from "../ContextProvider";

export default function ComponentE1() {
  return (
    <>
      <div>Component E1</div>
      <div>
        Value from UserContextA:
        <UserContext.Consumer>
          {(user) => <span>{" " + user}</span>}
        </UserContext.Consumer>
      </div>
    </>
  );
}
