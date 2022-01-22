import { updateUser } from "../utils";
import { useRef } from "react";

const EditFrom = (props) => {
  const { username, email, password } = props.user;

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelEditForm = (event) => {
    event.preventDefault();
    console.log("edited");
    const user = {
      ...props.user,
      ...{
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };
    updateUser(user);
  };

  return (
    <>
      <h3>Edit user {username}</h3>
      <form onSubmit={handelEditForm}>
        <div>
          <label htmlFor="username">Name </label>
          <input
            ref={usernameRef}
            type="text"
            name="username"
            id="username"
            defaultValue={username}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            id="email"
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            ref={passwordRef}
            type="text"
            name="password"
            id="password"
            defaultValue={password}
          />
        </div>
        <input type="submit" value="Edit" />
      </form>
    </>
  );
};

export default EditFrom;
