import {createSlice} from '@reduxjs/toolkit';
import {addTodo, removeTodo} from "./TodolistsReducer.js";
import {v4} from "uuid";


const slice = createSlice({
    name: 'tasks',
    initialState: {},
    reducers: {
        addTask: (state, action) => {
            const newTask = {title: action.payload.title, id: v4(), isDone: false}
            state[action.payload.todolistId] = [newTask, ...state[action.payload.todolistId]]
        },
        removeTask: (state, action) => {
            const index = state[action.payload.todolistId].findIndex(s => s.id === action.payload.id)
            state[action.payload.todolistId].splice(index, 1)
        },
        changeTaskStatus: (state, action) => {
            const tasks = state[action.payload.todolistId]
            const index = tasks.findIndex(s => s.id === action.payload.id)
            tasks[index] = {...tasks[index], isDone: action.payload.isDone}
        },
        changeTaskTitle: (state, action) => {
            const tasks = state[action.payload.todolistId]
            const index = tasks.findIndex(s => s.id === action.payload.id)
            tasks[index] = {...tasks[index], title: action.payload.newTitle}
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodo, (state, action) => {
                state[action.payload.id] = []
            })
            .addCase(removeTodo, (state, action) => {
                delete state[action.payload.id]
            })

    }
})

export const tasksReducer = slice.reducer

export const {addTask, removeTask, changeTaskStatus, changeTaskTitle} = slice.actions






