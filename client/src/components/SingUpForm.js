import { useRef } from "react";
import { addUser } from "../utils";

const SingUpForm = (props) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelSingUpForm = (event)=> {
    event.preventDefault();
    addUser(
        usernameRef.current.value, 
        emailRef.current.value, 
        passwordRef.current.value
        );
    

  }

  return (
    <>
      <h3>Sing up:</h3>
      <form onSubmit={handelSingUpForm} action="/">
        <div>
          <label htmlFor="username">Name </label>
          <input ref={usernameRef} type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input ref={emailRef} type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input ref={passwordRef} type="text" name="password" id="password" />
        </div>
        <input type="submit" value="Sing up" />
      </form>
    </>
  );
};

export default SingUpForm;
