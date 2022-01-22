import { deleteUser } from "../utils";

const ListOfUsers = (props) => {

  return (
    <div>
    <ul>
      {props.users.map((user) => (
        <li key={user._id}>
         <a href={`/users/${user.email}`} > Username: {user.username} Email: {user.email} Role: {user.role}{" "}</a>
          <button onClick={() => deleteUser(user._id)}>&times;</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ListOfUsers;
