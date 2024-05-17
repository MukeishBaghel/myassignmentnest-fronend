// // import { scope } from "@/utils/types/user";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../Store";

// const initialState = {
//   userDetails: null,
//   accessToken: null,
// };
// console.log(initialState);

// const userSlice: any = createSlice({
//   name: "OauthUser",
//   initialState,
//   reducers: {
//     setGoogleOauth: (state, action: PayloadAction<OauthIUser>) => {
//       state.userDetails = action.payload;
//     },
//     setAccessToken:(state,action)=>{
//         state.accessToken=action.payload
//     }

//     logOut: (state) => {
//       state.token = null;
//       state.userDetails = null;
//     },
//   },
// });

// export const { setCredentials, logOut } = userSlice.actions;
// export default userSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.user;
