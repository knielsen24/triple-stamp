import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import propertyReducer from "./features/propertySlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userApiSlice";
import { propertyApi } from "./services/propertyApiSlice";
import { unitApi } from "./services/unitApiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        property: propertyReducer,
        [userApi.reducerPath]: userApi.reducer,
        [propertyApi.reducerPath]: propertyApi.reducer,
        [unitApi.reducerPath]: unitApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            userApi.middleware,
            propertyApi.middleware,
            unitApi.middleware
        );
    },
});

setupListeners(store.dispatch);
