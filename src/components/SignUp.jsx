import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { authServer, pokedraftAPI } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordAuth from "./PasswordAuth";

export default function SignUp() {
  const { auth, setAuth } = useAuth();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    auth?.username ? navigate(from, { replace: true }) : null;
  }, [auth]);

  function signUpAttempt(e) {
    e.preventDefault();
    if (input.password !== input.retypePassword)
      setError("Passwords does not match");
    else if (!isPasswordValid) setError("Please enter a valid password");
    else {
      setIsLoading(true);
      setError(null);
      pokedraftAPI
        .post("/users", {
          username: input.username,
          password: input.password,
          email: input.email,
        })
        .then(({ data: { user } }) => {
          setAuth({ ...user });
          return;
        })
        .then(() => {
          return authServer.post(
            "/login",
            { username: input.username, password: input.password },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
        })
        .then(({ data: { accessToken } }) => {
          setAuth({ ...auth, accessToken });
          setIsLoading(false);
          navigate("/profile");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.data?.response?.message || "something went wrong");
          console.log(err);
        });
    }
  }

  function handleInput(e) {
    const { id, value } = e.target;
    setInput((input) => ({
      ...input,
      [id]: value,
    }));
  }

  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <>
        <form className="loginSignUp" onSubmit={signUpAttempt}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" onChange={handleInput} />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" onChange={handleInput} />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" onChange={handleInput} />
          <PasswordAuth
            password={input.password}
            setIsPasswordValid={setIsPasswordValid}
          />
          <label htmlFor="retypePassword">Retype Password:</label>
          <input id="retypePassword" type="password" onChange={handleInput} />
          <button>Sign-Up</button>
          {error ? <p>{error}</p> : null}
        </form>
      </>
    );
}
