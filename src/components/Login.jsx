import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { authServer } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser, token, setToken } = useContext(UserContext);
  const [newUsernameInput, setNewUsernameInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user, token);
    if (user) navigate("/profile");
  }, [user]);

  function loginAttempt(e) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    authServer
      .post(
        "/login",
        {
          username: newUsernameInput,
          password: newPasswordInput,
        },
        {
          headers: { "Content-Type": "application/json" },
          //withCredentials: true,
        }
      )
      .then(({ data: { accessToken, user } }) => {
        setToken(accessToken);
        setUser(user);
        setIsLoading(false);
      })
      .catch(({ code }) => {
        setIsLoading(false);
        code === "ERR_NETWORK"
          ? setError("Something went wrong - please try again later")
          : setError("Invalid login credentials");
      });
  }

  if (isLoading) return <p>Loading...</p>;
  else if (user) return <p>{`Logged in as ${user.username}`}</p>;
  else
    return (
      <>
        <form onSubmit={loginAttempt}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={newUsernameInput}
            onChange={(e) => setNewUsernameInput(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={newPasswordInput}
            onChange={(e) => setNewPasswordInput(e.target.value)}
          />
          <button>Login</button>
        </form>
        {error ? <p>{error}</p> : null}
      </>
    );
}
