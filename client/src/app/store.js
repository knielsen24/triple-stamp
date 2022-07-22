import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from "./services/userApiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(userApi.middleware)
    }
});

setupListeners(store.dispatch)
