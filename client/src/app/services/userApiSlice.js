import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["user", "properties", "UNAUTHORIZED"],
    endpoints(builder) {
        return {

            loginApi: builder.mutation({
                query: ({ ...data }) => ({
                    url: "/login",
                    method: "POST",
                    body: data,
                }), invalidatesTags: ['user'],
            }),

            fetchUser: builder.query({
                query: () => "/me",
                providesTags: ["user"]
            }),

            createUser: builder.mutation({
                query: ({ ...data }) => ({
                    url: "/signup",
                    method: "POST",
                    body: data,
                }),
            }),

            deleteUser: builder.mutation({
                query: (id) => ({
                    url: `/users/${id}`,
                    method: "DELETE",
                }),
            }),

            updateUser: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/users/${data.id}`,
                    method: "PATCH",
                    body: data,
                }), invalidatesTags: ['user'],
            }),
        };
    },
});

export const {
    useCreateUserMutation,
    useDeleteUserMutation,
    useLoginApiMutation,
    useUpdateUserMutation,
    useFetchUserQuery,
} = userApi;

// useLogoutApiMutation,
// logoutApi: builder.mutation({
//     query: ({}) => ({
//         url: "/logout",
//         method: "DELETE",
//     }),
// }),
