import { TTask } from "@/Types/taskType";
import { createSlice } from "@reduxjs/toolkit";

interface TInitialState {
    tasks: TTask[]
}

const initialState: TInitialState = {
    tasks: [
        {
            id: 1,
            title: 'Create first Redux app',
            description: 'Install Redux and create a simple counter app',
            dueDate: '2025-3-05',
            priority: 'high',
            isCompleted: false,
        }
    ]
} 


export const todoSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})


export default todoSlice.reducer;