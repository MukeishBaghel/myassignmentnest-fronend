import { jwtDecode } from "jwt-decode";
import { store } from "../redux/Store";

const isTokenExpired = () => {
  const { token, userType } = store.getState().user;
  // const dispatch = useDispatch();
  if (!token || !userType) return true;
  try {
    if (userType === "app_user") {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        // dispatch(logOut());
        return true;
      }
    } else if (userType === "google_user") {
      // TODO: FOr google user Add generate refresh token concept
      if (!token) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
};

export default isTokenExpired;
