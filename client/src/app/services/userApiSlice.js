import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["user", "properties", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            logoutApi: builder.mutation({
                query: () => ({
                    url: "/logout",
                    method: "DELETE",
                }),
                invalidatesTags: ["user"],
            }),

            fetchUser: builder.query({
                query: () => "/currentuser",
                providesTags: ["user"],
            }),

            loginApi: builder.mutation({
                query: ({ ...data }) => ({
                    url: "/login",
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["user"],
            }),



            createUser: builder.mutation({
                query: ({ ...data }) => ({
                    url: "/signup",
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["user"],
            }),

            deleteUser: builder.mutation({
                query: (id) => ({
                    url: `/users/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: ["user"],
            }),

            updateUser: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/currentuser`,
                    method: "PATCH",
                    body: data,
                }),
                invalidatesTags: ["user"],
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
    useLogoutApiMutation,
} = userApi;
