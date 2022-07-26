import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["user", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            loginApi: builder.mutation({
                query: ({ ...credentials }) => ({
                    url: "/login",
                    method: "POST",
                    body: credentials,
                }),
                providesTags: ["user"],
            }),

            // fetchUser: builder.query({
            //     query: () => "/me",
            //                 }),

            createUser: builder.mutation({
                query: ({ ...data }) => ({
                    url: "/signup",
                    method: "POST",
                    body: data,
                }),
            }),

            updateUser: builder.mutation({
                query: ({ ...updatedData }) => ({
                    url: `/users/${updatedData.id}`,
                    method: "PATCH",
                    body: updatedData,
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


        };
    },
});

export const {
    useFetchUserQuery,
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
