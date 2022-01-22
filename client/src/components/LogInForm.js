import { useRef } from "react";
import { getOneUser } from "../utils";

const LogInForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogInForm = (event) => {
    event.preventDefault();
    getOneUser(emailRef.current.value).then((user) => {
      console.log(user);
    });
  };

  return (
    <>
      <h3>Log in:</h3>
      <form onSubmit={handleLogInForm}>
        <div>
          <label htmlFor="email">Email </label>
          <input ref={emailRef} type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input ref={passwordRef} type="text" name="password" id="password" />
        </div>
        <input type="submit" value="Log in" />
      </form>
    </>
  );
};

export default LogInForm;
