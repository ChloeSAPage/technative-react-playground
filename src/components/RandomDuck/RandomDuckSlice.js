import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk
export const fetchDuckImage = createAsyncThunk(
    "randomDuck/fetchDuckImage",
    async () => {
        try {
            //const apiURL = "https://random-d.uk/api/quack";
            const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";
            const response = await fetch(apiURL, {
                headers: { Accept: "application/json" },
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            return data.name;
        } catch (error) {
            console.log("error: " + error);
        }
    }
);

const initialState = {
    imageURL: "/images/mallards.jpg",
    isLoading: false,
    hasError: null,
};

const config = {
    name: "randomDuck",
    initialState,
    reducers: {}, // don't need
    extraReducers: (builder) => {
        builder
            .addCase(fetchDuckImage.pending, (state) => {
                state.isLoading = true;
                state.hasError = null;
                // display default duck
            })
            .addCase(fetchDuckImage.fulfilled, (state, action) => {
                // change duck image to new random duck
                // updating state - change duck img to state
                state.isLoading = false;
                state.hasError = null;
                state.imageURL = action.payload;
            })
            .addCase(fetchDuckImage.rejected, (state, action) => {
                // display an error
                state.isLoading = false;
                state.hasError = action.error.message;
            });
    },
};

const randomDuckSlice = createSlice(config);

export const selectDuckImage = (state) => state.randomDuck.imageURL;

export default randomDuckSlice.reducer;
