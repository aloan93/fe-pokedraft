import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { authServer } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { auth, setAuth, persist, setPersist } = useAuth();
  const [newUsernameInput, setNewUsernameInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    auth?.username ? navigate(from, { replace: true }) : null;
  }, [auth]);

  useEffect(() => {
    //console.log(persist);
    localStorage.setItem("persist", persist);
  }, [persist]);

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
          withCredentials: true,
        }
      )
      .then(({ data: { accessToken, user } }) => {
        setAuth({ ...user, accessToken });
        setIsLoading(false);
        navigate(from, { replace: true });
      })
      .catch(({ code }) => {
        setIsLoading(false);
        code === "ERR_NETWORK"
          ? setError("Something went wrong - please try again later")
          : setError("Invalid login credentials");
      });
  }

  function togglePersist() {
    setPersist(!persist);
  }

  if (isLoading) return <p>Loading...</p>;
  else if (auth?.username) return <p>{`Logged in as ${auth.username}`}</p>;
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
          <>
            <input
              type="checkbox"
              id="persist"
              onChange={togglePersist}
              checked={persist}
            />
            <label htmlFor="persist">Trust this device</label>
          </>
        </form>
        {error ? <p>{error}</p> : null}
      </>
    );
}
