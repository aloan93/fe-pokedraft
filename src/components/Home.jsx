import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { auth } = useAuth();

  useEffect(() => {
    console.log(auth);
  }, []);

  return <p>Welcome to PokeDraft</p>;
}
