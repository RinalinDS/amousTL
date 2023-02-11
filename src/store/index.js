import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit';
import {tasksReducer} from "./reducers/TasksReducer.js";
import {todolistsReducer} from "./reducers/TodolistsReducer.js";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/index.js";

const sagaMiddleware = createSagaMiddleware()

export const reducers = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

