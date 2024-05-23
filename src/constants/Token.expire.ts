import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../redux/slices/user.slice";

const isTokenExpired = () => {
  const { token, userType } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  if (!token) return true;
  try {
    if (userType && userType === "app_user") {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        dispatch(logOut());
        return true;
      }
    } else {
      // TODO: FOr google user Add generate refresh token concept
    }
    return false;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
};

export default isTokenExpired;
