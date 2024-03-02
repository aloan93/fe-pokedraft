import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoggedOut() {
  return (
    <>
      <Link to="/login">Login</Link>
      {" / "}
      <Link to="/signup">Sign-Up</Link>
    </>
  );
}

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav>
      <Link to="/">HOME</Link>
      {"  |  "}
      <Link to="/pokemon">Pokemon</Link>
      {"  |  "}
      {user ? <Link to="/profile">{user.username}</Link> : <LoggedOut />}
    </nav>
  );
}
