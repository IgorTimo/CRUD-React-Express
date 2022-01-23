const Header = () => {
  return (
    <ul>
      <li><a href = "/" onClick={() => sessionStorage.clear()}>Log out</a></li>
      <li><a href="/">Home</a></li>
      <li><a href="/users">All users</a></li>
    </ul>
  );
};

export default Header;
