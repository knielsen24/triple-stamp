import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["Property", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            userProperties: builder.query({
                query(id){
                    return `/users/${id}/properties`
                }
            }),

            createProperty: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/users/${data.user_id}/properties`,
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "Property", id: arg.id },
                ],
            }),

        };
    },
});

export const { useUserPropertiesQuery, useCreatePropertyMutation } = propertyApi;
