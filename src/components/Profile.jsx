import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.username) navigate("/login");
  }, [auth]);

  function logout(e) {
    e.preventDefault();
    setAuth({});
  }

  if (auth?.username)
    return (
      <>
        <p>{auth.username}</p>
        <p>{auth.email}</p>
        <p>{auth.join_date}</p>
        <img
          src={auth.avatar_url}
          alt={`User ${auth.username}'s profile picture`}
        />
        <Link to="/profile/settings">Settings</Link>
        <button onClick={logout}>Logout</button>
      </>
    );
}
