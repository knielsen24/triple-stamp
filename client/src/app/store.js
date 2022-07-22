import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { dataApi } from "./services/apiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [dataApi.reducerPath]: dataApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dataApi.middleware)
    }
});
