import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import EditFrom from "./components/EditFrom";
import Header from "./components/Header";
import Home from "./components/Home";
import ListOfUsers from "./components/ListOfUsers";
import LogInForm from "./components/LogInForm";
import SingUpForm from "./components/SingUpForm";
import { getUsers } from "./utils";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => setUsers(users))
      .catch((error) => console.error(error));
  }, [users]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/singup" element={<SingUpForm />} />
          <Route path="/all_users" element={<ListOfUsers users={users} />} />
          <Route path="/edit" element={<EditFrom/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
