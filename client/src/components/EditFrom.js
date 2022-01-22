import { getUserByEmail, updateUser } from "../utils";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFrom = (props) => {
  const [user, setUser] = useState({});
  const params = useParams();
  const navigate = useNavigate();




  useEffect(() => {
    getUserByEmail(params.email ).then((user) => {setUser(user)})
  }, []);
  

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelEditForm = (event) => {
    event.preventDefault();
    console.log("edited");
    const newUser = {
      ...user,
      ...{
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };
    updateUser(newUser);
    navigate("/users");
  };

  return (
    <>
      <h3>User {params.email}</h3>

      <form onSubmit={handelEditForm}>
        <div>
          <label htmlFor="username">Name </label>
          <input
            ref={usernameRef}
            type="text"
            name="username"
            id="username"
            defaultValue={user.username}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            id="email"
            defaultValue={user.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            ref={passwordRef}
            type="text"
            name="password"
            id="password"
            defaultValue={user.password}
          />
        </div>
        <input type="submit" value="Edit" /> 
      </form>
    </>
  );
};

export default EditFrom;
