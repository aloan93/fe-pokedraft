import { UserContext } from "../contexts/User";
import { pokedraftAPI } from "../api/api";
import { useState, useContext } from "react";

export default function Profile() {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <p>duhwbey</p>
    </>
  );
}
