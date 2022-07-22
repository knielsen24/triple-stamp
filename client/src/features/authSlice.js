// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: null,
//     token: null,
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         setLogin: (state, action) => {
//             const { user, accessToken } = action.payload;
//             state.user = user;
//             state.token = accessToken;
//         },
//         logout: (state, action) => {
//             state.user = null;
//         },
//     },
// });


// export const { setLogin, logout } = authSlice.actions

// export default authSlice.reducer = (state) => state.auth.token

// export const selectCurrentUser = (state) => state.auth.token
