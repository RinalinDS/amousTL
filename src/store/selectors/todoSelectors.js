import {createSelector} from "reselect";

const selectTodos = state => state.todolists
export const todosSelector = createSelector(
    [selectTodos],
    (todos) => todos
)