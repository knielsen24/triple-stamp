import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["Property", "User", "UNAUTHORIZED"],
    endpoints(builder) {
        return {

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

export const { useCreatePropertyMutation } = propertyApi;
