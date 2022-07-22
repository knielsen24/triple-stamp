import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLogin, logout } from "../../features/authSlice";

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
        };
    },
});

export const { useCreateUserMutation } = dataApi
