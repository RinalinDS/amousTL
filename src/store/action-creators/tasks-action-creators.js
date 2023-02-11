import {createAction} from 'redux-act';

const addTaskAC = createAction('ADD_TASK', (title, todolistId) => ({title, todolistId}));
const changeTaskStatusAC = createAction('CHANGE_TASK_STATUS', (id, isDone, todolistId) => ({id, isDone, todolistId}));
const changeTaskTitleAC = createAction('CHANGE_TASK_TITLE', (id, newTitle, todolistId) => ({id, newTitle, todolistId}));
const removeTaskAC = createAction('REMOVE_TASK', (id, todolistId) => ({id, todolistId}));

export const TasksAC = {
    addTaskAC,
    changeTaskTitleAC,
    changeTaskStatusAC,
    removeTaskAC
}