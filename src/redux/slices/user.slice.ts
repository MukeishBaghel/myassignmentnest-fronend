// import { scope } from "@/utils/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { jwtDecode } from "jwt-decode";

const initialState: UserState = {
  userDetails: null,
  token: null,
};
console.log(initialState);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UsersToken>) => {
      const { token } = action.payload;
      state.token = token;
      if (token) state.userDetails = jwtDecode(token);
    },


    logOut: (state) => {
      state.token = null;
      state.userDetails = null;
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user;
