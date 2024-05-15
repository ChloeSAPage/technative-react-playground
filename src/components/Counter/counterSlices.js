import { createSlice } from "@reduxjs/toolkit";

// Config Object
const config = {
    name: "Counter",
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state += 1;
        },
        decrement: (state) => {
            return state -= 1;
        },
    },
};

// Slice
export const counterSlice = createSlice(config);
// Actions
export const { increment, decrement } = counterSlice.actions;
// Reducers
export default counterSlice.reducer;

