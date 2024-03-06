import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  useEffect(() => {
    if (!auth?.username) navigate("/login");
  }, [auth]);

  const signOut = async (e) => {
    e.preventDefault();
    await logout();
    navigate("/");
  };

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
        <button onClick={signOut}>Logout</button>
      </>
    );
}
