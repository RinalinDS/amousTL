import {put, takeLatest} from 'redux-saga/effects'
import {addTodo, changeFilter, changeTitle, removeTodo} from "../reducers/TodolistsReducer.js";
import {ActionCreators} from "../action-creators/index.js";


export function* addTodoWorker(action) {
    try {
        yield put(addTodo(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}

export function* removeTodoWorker(action) {
    try {
        yield put(removeTodo(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}

export function* changeTodoFilterWorker(action) {
    try {
        yield put(changeFilter(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}

export function* changeTodoTitleWorker(action) {
    try {
        yield put(changeTitle(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}


export function* TodolistsWatcher() {
    yield takeLatest(ActionCreators.addTodoAC.getType(), addTodoWorker)
    yield takeLatest(ActionCreators.removeTodoAC.getType(), removeTodoWorker)
    yield takeLatest(ActionCreators.changeTodoFilterAC.getType(), changeTodoFilterWorker)
    yield takeLatest(ActionCreators.changeTodoTitleAC.getType(), changeTodoTitleWorker)

}