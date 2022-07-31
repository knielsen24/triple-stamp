import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import propertyReducer from "./features/propertySlice"
import unitReducer from "./features/unitSlice"
import unitsListReducer from "./features/unitsListSlice"
import inspectionReducer from "./features/inspectionSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userApiSlice";
import { propertyApi } from "./services/propertyApiSlice";
// import { unitApi } from "./services/unitApiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        property: propertyReducer,
        unit: unitReducer,
        unitsList: unitsListReducer,
        inspection: inspectionReducer,
        [userApi.reducerPath]: userApi.reducer,
        [propertyApi.reducerPath]: propertyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            userApi.middleware,
            propertyApi.middleware,
        );
    },
});

setupListeners(store.dispatch);
