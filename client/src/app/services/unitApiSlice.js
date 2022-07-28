import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unitApi = createApi({
    reducerPath: "unitApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["units", "properties", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            // fetchUnits: builder.query({
            //     query: (id) => `/properties/${id}/units`,
            //     providesTags: ["units"],
            // }),

            createUnit: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/properties/${data.property_id}/units`,
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["units", "properties"],
            }),

            updateUnit: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/units/${data.id}`,
                    method: "PATCH",
                    body: data,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "units", id: arg.id },
                ],
            }),

            deleteUnit: builder.mutation({
                query: (id) => ({
                    url: `/units/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, arg) => ["properties",
                    { type: "units", id: arg.id },
                ],
            }),
        };
    },
});

export const {
    useFetchUnitsQuery,
    useCreateUnitMutation,
    useUpdateUnitMutation,
    useDeleteUnitMutation,
} = unitApi;
