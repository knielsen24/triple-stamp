import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    unitsList: "",
};

export const unitsListSlice = createSlice({
    name: "unitsList",
    initialState,
    reducers: {
        unitsList: (state, action) => {
            state.unitsList = action.payload;
        },
    },
});

export const { unitsList } = unitsListSlice.actions;

export const setUnitsList = (state) => state.unitsList.unitsList;

export default unitsListSlice.reducer;
