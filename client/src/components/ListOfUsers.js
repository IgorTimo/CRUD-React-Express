import { deleteUser } from "../utils";




const ListOfUsers = (props) => {

  return (
    <div>
    <ul>
      {props.users.map((user) => (
        <li key={user._id}>
          Username: {user.username} Email: {user.email} Role: {user.role}{" "}
          <button onClick={() => console.log(user)}>Edit</button>
          <button onClick={() => deleteUser(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ListOfUsers;
