import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["User", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            createUser: builder.mutation({
                query: ({ ...signUpData }) => ({
                    url: "/signup",
                    method: "POST",
                    body: signUpData,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "User", id: arg.id },
                ],
            }),

            loginApi: builder.mutation({
                query: ({ ...credentials }) => ({
                    url: "/login",
                    method: "POST",
                    body: credentials,
                }),
                invalidatesTags: (result) => (result ? ["UNAUTHORIZED"] : []),
            }),



            deleteUser: builder.mutation({
                query: (id) => ({
                    url: `/managers/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, id) => [{ type: "User", id }],
            }),
        };
    },
});

export const {
    useCreateUserMutation,
    useDeleteUserMutation,
    useLoginApiMutation,
    // useLogoutApiMutation,
} = userApi;

// logoutApi: builder.mutation({
//     query: ({}) => ({
//         url: "/logout",
//         method: "DELETE",
//     }),
//     invalidatesTags: (result) => (result ? ["UNAUTHORIZED"] : []),
// }),