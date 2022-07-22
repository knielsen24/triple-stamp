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
            destroyUser: builder.mutation({
                query: ({id}) => ({
                    url: "/signup",
                    method: "POST",
                    body: ""
                }),
                invalidatesTags: (result, error, arg) => [{type: 'User', id: arg.id}]
            })
        };
    },
});

export const { useCreateUserMutation } = dataApi
