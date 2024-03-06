import { authServer } from "../api/api";
import useAuth from "./useAuth";

export default function useLogout() {
  const { setAuth } = useAuth();

  function logout() {
    setAuth({});
    authServer
      .delete("/logout", { withCredentials: true })
      .catch((err) => console.log(err));
  }

  return logout;
}
