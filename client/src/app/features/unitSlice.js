import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    unit: {
        id: "",
        number: "",
        label: "",
        square_feet: "",
        property_id: "",
    },
};

export const unitSlice = createSlice({
    name: "unit",
    initialState,
    reducers: {
        selectUnit: (state, action) => {
            state.unit = action.payload;
        },
    },
});

export const { selectUnit } = unitSlice.actions;

export const setSelectUnit = (state) => state.unit.unit;

export default unitSlice.reducer;
