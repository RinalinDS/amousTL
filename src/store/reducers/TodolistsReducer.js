import {createSlice} from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'todolists',
    initialState: [],
    reducers: {
        changeFilter: (state, action) => {
            const index = state.findIndex(s => s.id === action.payload.id)
            state[index].filter = action.payload.filter
        },
        addTodo: (state, action) => {
            const newTodo = {title: action.payload.title, id: action.payload.id, filter: 'all'}
            state = [newTodo, ...state]
            return state
        },
        removeTodo: (state, action) => {
            const index = state.findIndex(s => s.id === action.payload.id)
            state.splice(index, 1)
        },
        changeTitle: (state, action) => {
            console.log(action)
            const index = state.findIndex(s => s.id === action.payload.id)
            state[index].title = action.payload.newTitle
        },
    },
})

export const todolistsReducer = slice.reducer

export const {
    changeFilter,
    addTodo,
    removeTodo,
    changeTitle,
} = slice.actions


