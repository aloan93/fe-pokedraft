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
  const { auth } = useAuth();

  return (
    <nav>
      <Link to="/">HOME</Link>
      {"  |  "}
      <Link to="/pokemon">Pokemon</Link>
      {"  |  "}
      {auth?.username ? (
        <Link to="/profile">{auth.username}</Link>
      ) : (
        <LoggedOut />
      )}
    </nav>
  );
}
