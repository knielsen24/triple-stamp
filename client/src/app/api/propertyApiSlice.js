import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: [
        "properties",
        "property",
        "units",
        "inspections",
        "items",
        "UNAUTHORIZED",
    ],
    endpoints(builder) {
        return {
            fetchProperties: builder.query({
                query: (user_id) => `/users/${user_id}/properties`,
                providesTags: ["properties", "units"],
            }),
            fetchProperty: builder.query({
                query: (id) => `/properties/${id}`,
                providesTags: ["property"],
            }),
            // Not using fetchPropUnits. Performance is subpar
            fetchPropUnits: builder.query({
                query: (id) => `/properties/${id}/units`,
                providesTags: ["units"],
            }),

            fetchPropInspections: builder.query({
                query: (id) => `/properties/${id}/inspections`,
                providesTags: ["inspections"],
            }),

            fetchInspectItems: builder.query({
                query: (id) => `/inspections/${id}/items`,
                providesTags: ["items"],
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
                    { type: "properties", id: arg.data },
                ],
            }),

            deleteProperty: builder.mutation({
                query: (id) => ({
                    url: `/properties/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, arg) => [
                    "property",
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
                    "property",
                    { type: "properties", id: arg.data },
                ],
            }),

            updateUnit: builder.mutation({
                query: ({ ...data }) => ({
                    url: `/units/${data.id}`,
                    method: "PATCH",
                    body: data,
                }),
                invalidatesTags: (result, error, arg) => [
                    "property",
                    { type: "units", id: arg.data },
                ],
            }),

            deleteUnit: builder.mutation({
                query: (id) => ({
                    url: `/units/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: (result, error, arg) => [
                    "inspections",
                    "property",
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
    useFetchPropertyQuery,
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

    useFetchInspectItemsQuery,
} = propertyApi;
