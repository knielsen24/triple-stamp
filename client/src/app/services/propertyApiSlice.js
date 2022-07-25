import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    tagTypes: ["Property", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            userProperties: builder.query({
                query(id){
                    return `/users/${id}/properties`
                }
            }),
        };
    },
});

export const { useUserPropertiesQuery } = propertyApi;
