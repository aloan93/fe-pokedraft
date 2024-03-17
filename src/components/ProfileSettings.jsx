import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import usePokedraftAPIPrivate from "../hooks/usePokedraftAPIPrivate";
import { useNavigate, useLocation } from "react-router-dom";

export default function ProfileSettings() {
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState({ username: "" });
  const [isSaved, setIsSaved] = useState(false);
  const pokedraftAPIPrivate = usePokedraftAPIPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, [auth]);

  function submitEditsAttempt(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    pokedraftAPIPrivate
      .patch(`/users/${auth?.user_id}`, input)
      .then(({ data: { user } }) => {
        setAuth((prev) => {
          return { ...prev, ...user };
        });
        setIsSaved(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong");
        setIsLoading(false);
        console.log(err);
      });
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
        <form className="formDefault" onSubmit={submitEditsAttempt}>
          {isSaved ? <p>{"Changes saved :)"}</p> : null}
          <label htmlFor="username">New Username:</label>
          <input id="username" type="text" onChange={handleInput} />
          <p>{`Current username: ${auth?.username}`}</p>
          <button>Submit</button>
          {error ? <p>{error}</p> : null}
        </form>
      </>
    );
}
