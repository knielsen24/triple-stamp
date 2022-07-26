import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["property", "user", "UNAUTHORIZED"],
    endpoints(builder) {
        return {

            createProperty: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/users/${data.user_id}/properties`,
                    method: "POST",
                    body: data,
                }), invalidatesTag: ['user'],
            }),

            deleteProperty: builder.mutation({
                query: ({ id }) => ({
                    url: `/properties/${id}`,
                    method: "DELETE",
                }), invalidatesTag: ['user'],
            }),

        };
    },
});

export const { useCreatePropertyMutation, useDeletePropertyMutation } = propertyApi;
