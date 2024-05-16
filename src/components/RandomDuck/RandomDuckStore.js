import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import randomDuckReducer from "./RandomDuckSlice";

export const store = configureStore({
    reducer: {
        randomDuckReducer,
    },
});

export default store;
