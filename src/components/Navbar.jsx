import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <Link to="/">HOME</Link>
      {"  |  "}
      <Link to="/pokemon">Pokemon</Link>
      {"  |  "}
      {user ? (
        <Link to="/profile">{user.username}</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
