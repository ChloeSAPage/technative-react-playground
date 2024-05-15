import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlices";

// Store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
