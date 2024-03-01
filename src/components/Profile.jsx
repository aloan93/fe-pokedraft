import { UserContext } from "../contexts/User";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser, token, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user, token);
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
        <button onClick={logout}>Logout</button>
      </>
    );
}
