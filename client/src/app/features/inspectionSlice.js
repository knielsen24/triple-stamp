import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inspection: {
        id: "",
        title: "",
        type_name: "",
        scheduled_date: "",
        status: "",
        unit_id: "",
        unit: [{ number: "" }],
    },
};

export const inspectionSlice = createSlice({
    name: "inspection",
    initialState,
    reducers: {
        selectInspection: (state, action) => {
            state.inspection = action.payload;
        },
    },
});

export const { selectInspection } = inspectionSlice.actions;

export const setSelectInspection = (state) => state.inspection.inspection;

export default inspectionSlice.reducer;
