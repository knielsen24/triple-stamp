import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["User"],
    endpoints(builder) {
        return {
            createUser: builder.mutation({
                query: ({...signUpData}) => ({
                    url: "/signup",
                    method: "POST",
                    body: signUpData
                }),
                invalidatesTags: (result, error, arg) => [{type: 'User', id: arg.id}]
            }),
            deleteUser: builder.mutation({
                query: (id) => ({
                    url: `/managers/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, id) => [{type: 'User', id}]
            })
        };
    },
});

export const { useCreateUserMutation, useDeleteUserMutation } = dataApi
