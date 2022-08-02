import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["properties", "units", "inspections", "UNAUTHORIZED"],
    endpoints(builder) {
        return {
            fetchProperties: builder.query({
                query: (id) => `/users/${id}/properties`,
                providesTags: ["properties", "units"],
            }),
            // Not using fetchPropUnits. Performance not as good
            fetchPropUnits: builder.query({
                query: (id) => `/properties/${id}/units`,
                providesTags: ["units"],
            }),

            fetchPropInspections: builder.query({
                query: (id) => `/properties/${id}/inspections`,
                providesTags: ["inspections"],
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
                invalidatesTags: (result, error, arg) => [
                    { type: "properties", id: arg.property_id },
                ],
            }),

            updateUnit: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/units/${data.id}`,
                    method: "PATCH",
                    body: data,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "units", id: arg.data },
                ],
            }),

            deleteUnit: builder.mutation({
                query: (id) => ({
                    url: `/units/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, arg) => [
                    // "properties",
                    { type: "units", id: arg.id },
                ],
            }),

            createInspect: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/units/${data.unit_id}/inspections`,
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["inspections"],
            }),

            updateInspect: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/inspections/${data.id}`,
                    method: "PATCH",
                    body: data,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "inspections", id: arg.data },
                ],
            }),

            deleteInspect: builder.mutation({
                query: (id) => ({
                    url: `/inspections/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: "inspections", id: arg.id },
                ],
            }),
        };
    },
});

export const {
    useFetchPropertiesQuery,
    useCreatePropertyMutation,
    useUpdatePropertyMutation,
    useDeletePropertyMutation,

    useFetchPropUnitsQuery,
    useCreateUnitMutation,
    useUpdateUnitMutation,
    useDeleteUnitMutation,

    useFetchPropInspectionsQuery,
    useUpdateInspectMutation,
    useDeleteInspectMutation,
    useCreateInspectMutation,
    // useCreatePropInspectMutation,
} = propertyApi;
