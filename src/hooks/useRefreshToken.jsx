import { authServer } from "../api/api";
import useAuth from "./useAuth";

export default function useRefreshToken() {
  const { user, setToken } = useAuth();

  const refresh = async () => {
    const response = await authServer.post(
      "/token",
      { user_id: user.user_id },
      {
        withCredentials: true,
      }
    );
    const accessToken = response.data.accessToken;
    setToken(accessToken);
    return accessToken;
  };
  return refresh;
}
