import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    propertyList: {
        name: []
    },
};

export const propertyListSlice = createSlice({
    name: "propertyList",
    initialState,
    reducers: {
        setPropertyList: (state, action) => {
            state.propertyList = action.payload;
        },
    },
});

export const { setPropertyList } = propertyListSlice.actions;

export const propertyList = (state) => state.propertyList.propertyList;

export default propertyListSlice.reducer;
