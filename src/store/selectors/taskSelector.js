// import {createSelector} from "@reduxjs/toolkit";
// I know that you can use reselect from RTK , which is the same as standalone reselect , but it was required to use reselect , so here we are
import {createSelector} from "reselect";

const selectTasks = state => state.tasks

export const selectFilteredTasks = createSelector(
    [
        selectTasks,
        (_, id, filter) => ({id, filter})
    ],
    (tasks, {id, filter}) => {
        if (filter === 'active') return tasks[id].filter(f => !f.isDone)
        if (filter === 'completed') return tasks[id].filter(f => f.isDone)
        return tasks[id]
    }
)

