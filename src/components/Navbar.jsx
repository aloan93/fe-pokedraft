import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoggedOut() {
  return (
    <>
      <Link to="/login" className="navLink">
        Login
      </Link>
      {" / "}
      <Link to="/signup" className="navLink">
        Sign-Up
      </Link>
    </>
  );
}

export default function Navbar() {
  const { auth } = useAuth();

  return (
    <nav>
      <div>
        <Link to="/" className="navLink">
          HOME
        </Link>
        {"  |  "}
        <Link to="/pokemon" className="navLink">
          Pokemon
        </Link>
        {"  |  "}
        <Link to="/users" className="navLink">
          Users
        </Link>
      </div>
      <div>
        {auth?.username ? (
          <Link to="/profile" className="navLink">
            {auth.username}
          </Link>
        ) : (
          <LoggedOut />
        )}
      </div>
    </nav>
  );
}
