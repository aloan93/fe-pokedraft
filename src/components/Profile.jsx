import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { convertISOToDate } from "../../utilities/utils";

export default function Profile() {
  const { auth } = useAuth();
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
      <div className="profile">
        <div className="profileDetails">
          <label>Username:</label>
          <p>{auth.username}</p>
          <label>Email:</label>
          <p>{auth.email}</p>
          <label>Joined:</label>
          <p>{convertISOToDate(auth.join_date)}</p>
          <Link to="/profile/settings">Settings</Link>
          <button onClick={signOut}>Logout</button>
        </div>
        <img
          src={auth.avatar_url}
          alt={`User ${auth.username}'s profile picture`}
        />
      </div>
    );
}
