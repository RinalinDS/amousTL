import {all} from 'redux-saga/effects'
import {TasksWatcher} from "./tasksSaga.js";
import {TodolistsWatcher} from "./todolistsSaga.js";

export default function* rootSaga() {
    yield all([TasksWatcher(), TodolistsWatcher()])
}
