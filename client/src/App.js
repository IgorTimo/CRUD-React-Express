import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditFrom from "./components/EditFrom";
import Header from "./components/Header";
import Home from "./components/Home";
import ListOfUsers from "./components/ListOfUsers";
import LogInForm from "./components/LogInForm";
import SingUpForm from "./components/SingUpForm";
import { getUsers } from "./utils";

function App() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState();

console.log("rerendering app")

  useEffect(() => {
    getUsers()
      .then((users) => setUsers(users))
      .catch((error) => console.error(error));
  }, []);



  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/singup" element={<SingUpForm />} />
          <Route path="/users" element={<ListOfUsers users={users} />}/>
          <Route path="/users/:email" element={<EditFrom users = {users} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
