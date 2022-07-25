import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    property: {
        name: "Select Property"
    },
};

export const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {
        selectProperty: (state, action) => {
            state.property = action.payload;
        },
    },
});

export const { selectProperty } = propertySlice.actions;

export const setSelectProperty = (state) => state.property.property;

export default propertySlice.reducer;
