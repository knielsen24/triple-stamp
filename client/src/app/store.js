import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userApiSlice";
import { propertyApi } from "./services/propertyApiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [propertyApi.reducerPath]: propertyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            userApi.middleware,
            propertyApi.middleware
        );
    },
});

setupListeners(store.dispatch);
