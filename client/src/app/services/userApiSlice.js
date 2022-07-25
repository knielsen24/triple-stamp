import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
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
                    url: `/users/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, id) => [{ type: "User", id }],
            }),

            updateUser: builder.mutation({
                query: ({id, ...updatedData }) => ({
                    url: `/users/${id}`,
                    method: "PATCH",
                    body: updatedData,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "User", id: arg.id },
                ],
            }),
        };
    },
});

export const {
    useCreateUserMutation,
    useDeleteUserMutation,
    useLoginApiMutation,
    useUpdateUserMutation,
    // useLogoutApiMutation,
} = userApi;

// logoutApi: builder.mutation({
//     query: ({}) => ({
//         url: "/logout",
//         method: "DELETE",
//     }),
//     invalidatesTags: (result) => (result ? ["UNAUTHORIZED"] : []),
// }),
