import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["properties", "user", "UNAUTHORIZED"],
    endpoints(builder) {
        return {

            fetchProperties: builder.query({
                query: () => "/me/properties",
                providesTags: ["properties"]
            }),

            createProperty: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/users/${data.user_id}/properties`,
                    method: "POST",
                    body: data,
                }), invalidatesTag: ['properties'],
            }),

            deleteProperty: builder.mutation({
                query: (id) => ({
                    url: `/properties/${id}`,
                    method: "DELETE",
                }), invalidatesTag: ['properties'],
            }),


        };
    },
});

export const { useCreatePropertyMutation, useDeletePropertyMutation, useFetchPropertiesQuery,
 } = propertyApi;
