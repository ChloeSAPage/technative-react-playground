import { configureStore } from "@reduxjs/toolkit";
import randomDuckReducer from "./RandomDuckSlice";

export const store = configureStore({
    reducer: {
        randomDuck: randomDuckReducer,
    },
});

export default store;
