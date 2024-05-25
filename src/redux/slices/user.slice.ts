// import { scope } from "@/utils/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { googleLogout } from "@react-oauth/google";
import { userType } from "../../interfaces/user.type";

const initialState: UserState = {
  token: null,
  userType: null,
  refresh_token: null,
};
console.log(initialState);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, userType } = action.payload;
      state.token = token;
      state.userType = userType as userType;
    },
    logOut: (state) => {
      state.token = null;
      state.userType = null;
      state.refresh_token = null;
      if (state.userType && state.userType === "google_user") googleLogout();
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user;
