import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["properties", "units", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            fetchProperties: builder.query({
                query: () => "/currentuser/properties",
                providesTags: ["properties", "units"],
            }),

            createProperty: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/users/${data.user_id}/properties`,
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["properties"],
            }),

            updateProperty: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/properties/${data.id}`,
                    method: "PATCH",
                    body: data,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "properties", id: arg.id },
                ],
            }),

            deleteProperty: builder.mutation({
                query: (id) => ({
                    url: `/properties/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "properties", id: arg.id },
                ],
            }),

            createUnit: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/properties/${data.property_id}/units`,
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["properties"],
            }),

            updateUnit: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/units/${data.id}`,
                    method: "PATCH",
                    body: data,
                }),
                invalidatesTags: (result, error, arg) => [
                    "properties",
                    { type: "units", id: arg.id },
                ],
            }),

            deleteUnit: builder.mutation({
                query: (id) => ({
                    url: `/units/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, arg) => [
                    "properties",
                    { type: "units", id: arg.id },
                ],
            }),
        };
    },
});

export const {
    useCreatePropertyMutation,
    useDeletePropertyMutation,
    useFetchPropertiesQuery,
    useUpdatePropertyMutation,
    useCreateUnitMutation,
    useUpdateUnitMutation,
    useDeleteUnitMutation,
} = propertyApi;
