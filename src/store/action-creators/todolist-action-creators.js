import {createAction} from 'redux-act';
import {v4} from "uuid";

const addTodoAC = createAction('ADD_TODO', (title) => ({title, id: v4()}));
const changeTodoFilterAC = createAction('CHANGE_TODO_FILTER', (filter, id) => ({filter, id}));
const changeTodoTitleAC = createAction('CHANGE_TODO_TITLE', (newTitle, id) => ({newTitle, id}));
const removeTodoAC = createAction('REMOVE_TODO', (id) => ({id}));

export const TodoAC = {
    addTodoAC,
    changeTodoFilterAC,
    changeTodoTitleAC,
    removeTodoAC,
}