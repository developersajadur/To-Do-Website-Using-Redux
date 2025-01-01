import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state, action) => {
            state.value = state.value + action.payload;
        },
        decrement: (state, action) => {
            state.value = state.value - action.payload;
        }
    },
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;