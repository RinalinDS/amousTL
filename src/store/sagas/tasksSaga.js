import {put, takeLatest} from 'redux-saga/effects'
import {addTask, changeTaskStatus, changeTaskTitle, removeTask} from "../reducers/TasksReducer.js";
import {ActionCreators} from "../action-creators/index.js";



export function* addTaskWorker(action) {
    try {
        yield put(addTask(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}

export function* removeTaskWorker(action) {
    try {
        yield put(removeTask(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}

export function* changeTaskStatusWorker(action) {
    try {
        yield put(changeTaskStatus(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}


export function* changeTaskTitleWorker(action) {
    try {
        yield put(changeTaskTitle(action.payload))
    } catch (e) {
        console.warn(e)
    } finally {
    }
}


export function* TasksWatcher() {
    yield takeLatest(ActionCreators.addTaskAC.getType(), addTaskWorker)
    yield takeLatest(ActionCreators.changeTaskStatusAC.getType(), changeTaskStatusWorker)
    yield takeLatest(ActionCreators.changeTaskTitleAC.getType(), changeTaskTitleWorker)
    yield takeLatest(ActionCreators.removeTaskAC.getType(), removeTaskWorker)
}

