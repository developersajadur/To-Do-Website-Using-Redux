import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import todoSlice  from "./features/task/taskSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoSlice
    }, 
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;