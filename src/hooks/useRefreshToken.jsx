import { authServer } from "../api/api";
import useAuth from "./useAuth";

export default function useRefreshToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await authServer.post(
      "/token",
      {},
      {
        withCredentials: true,
      }
    );
    const accessToken = response.data.accessToken;
    const user = response.data.user;
    setAuth((prev) => {
      return { ...prev, accessToken, ...user };
    });
    return accessToken;
  };
  return refresh;
}
