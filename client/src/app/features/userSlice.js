import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { logout } = userSlice.actions;

export const setUser = (state) => state.user.user;

export default userSlice.reducer;
