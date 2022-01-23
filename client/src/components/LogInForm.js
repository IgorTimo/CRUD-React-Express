import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../utils";

const LogInForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogInForm = (event) => {
    event.preventDefault();
    logIn(emailRef.current.value, passwordRef.current.value).then(
      (data) => {
        props.setToken(data?.token);
        props.setUser(data?.user);
      }
    );
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
