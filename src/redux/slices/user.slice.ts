// import { scope } from "@/utils/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import { userType } from "../../interfaces/user.type";
const initialState: UserState = {
  userDetails: null,
  token: null,
  userType: null,
};
console.log(initialState);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, userType } = action.payload as any;
      state.token = token;
      state.userType = userType;
      if (token) {
        if (userType && userType !== "google_user") {
          state.userDetails = jwtDecode(token);
        } else {
          state.userDetails = action.payload;
        }
      }
    },
    logOut: (state) => {
      state.token = null;
      state.userDetails = null;
      state.userType = null;
      if (state.userType && state.userType === "google_user") googleLogout();
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user;
