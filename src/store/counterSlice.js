import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        addBy: (state, action) => {
            state.count += action.payload;
        },
        multiplyBy: (state, action) => {
            state.count *= action.payload;
        },
        divideBy: (state, action) => {
            state.count /= action.payload;
        },
    },
});

export const {increment, decrement, addBy, multiplyBy, divideBy} = counterSlice.actions;

export default counterSlice.reducer;