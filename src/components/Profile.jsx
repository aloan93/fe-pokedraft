import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const { user, setUser, setToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  function logout(e) {
    e.preventDefault();
    setToken();
    setUser();
  }

  if (user)
    return (
      <>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.join_date}</p>
        <img
          src={user.avatar_url}
          alt={`User ${user.username}'s profile picture`}
        />
        <Link to="/profile/settings">Settings</Link>
        <button onClick={logout}>Logout</button>
      </>
    );
}
