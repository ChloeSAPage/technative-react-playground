import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counter/counterSlices";
import randomDuckReducer from "../RandomDuck/RandomDuckSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        randomDuck: randomDuckReducer,
    },
});
