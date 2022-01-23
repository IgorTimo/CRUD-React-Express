import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditFrom from "./components/EditFrom";
import Enter from "./components/Enter";
import Header from "./components/Header";
import Home from "./components/Home";
import ListOfUsers from "./components/ListOfUsers";
import LogInForm from "./components/LogInForm";
import SingUpForm from "./components/SingUpForm";
import useToken from "./hooks/useToken";
import { getUsers } from "./utils";

// const setToken = (token) => {
//   sessionStorage.setItem("token", JSON.stringify(token));
// }

// const getToken = () => {
//   const token = JSON.parse(sessionStorage.getItem("token"));
//   console.log("token", token)
//   return token;
// }

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const {token, setToken} = useToken();

console.log("rerendering app")

  useEffect(() => {
    getUsers()
      .then((users) => setUsers(users))
      .catch((error) => console.error(error));
  }, []);

  if(!token) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Enter />}/>
            <Route path="/login" element={<LogInForm setToken = {setToken} setUser = {setUser} />} />
            <Route path="/singup" element={<SingUpForm />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }


  return (
    <>
      <BrowserRouter>
        <Header user = {user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<ListOfUsers users={users} />}/>
          <Route path="/users/:email" element={<EditFrom users = {users} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
