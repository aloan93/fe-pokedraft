import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { pokedraftAPI } from "../api/api";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [newUsernameInput, setNewUsernameInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function loginAttempt(e) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    pokedraftAPI
      .post("/users/login", {
        username: newUsernameInput,
        password: newPasswordInput,
      })
      .then(() => pokedraftAPI.get(`/users?username=${newUsernameInput}`))
      .then(({ data: { users } }) => {
        setUser(users[0]);
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
