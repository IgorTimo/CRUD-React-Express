const port = "http://localhost:3002";

export const getUsers = async () => {
  const response = await fetch(port + "/users");
  const data = await response.json();
  return data.users;
};

export const addUser = (username, email, password) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  };

  fetch(port + "/users", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.msg);
    });
};

export const updateUser = (user) => {
    console.log(user, " updated");
  
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({
        user: user,
      }),
      headers: {
        "Content-type": "application/json",
      },
    };
  
    fetch(port + "/users", requestOptions)
    .then(response => response.json())
    .then(data => console.log(data.msg));
  };

export const deleteUser = (userId) => {
  console.log(userId + " deleted");

  const requestOptions = {
    method: "DELETE",
    body: JSON.stringify({
      userId: userId
    }),
    headers: {
      "Content-type": "application/json",
    },
  };

  fetch(port + "/users", requestOptions)
  .then(response => response.json())
  .then(data => console.log(data.msg));
};

export async function getUserByEmail(email) {
  const response = await fetch(port + "/users/" +  email);
  const data = await response.json();
  return data.user;
};

