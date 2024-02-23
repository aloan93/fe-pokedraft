import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      {"  |  "}
      <Link to="/pokemon">Pokemon</Link>
      {"  |  "}
      <Link to="/login">Login</Link>
    </nav>
  );
}
