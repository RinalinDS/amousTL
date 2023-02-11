import React, {memo, useCallback} from 'react';
import {useDispatch} from "react-redux";
import {EditableSpan} from "../common/EditableSpan/EditableSpan.jsx";
import {ActionCreators} from "../../store/action-creators/index.js";
import {IconButton} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {Delete} from "@mui/icons-material";
import {TaskContainer} from "./styles.js";

export const Task = memo(({task, todoId}) => {
    const dispatch = useDispatch()

    const removeTask = useCallback(() => {
        dispatch(ActionCreators.removeTaskAC(task.id, todoId));
    }, [task.id, todoId])

    const changeStatus = useCallback((e) => {
        dispatch(ActionCreators.changeTaskStatusAC(task.id, e.currentTarget.checked, todoId))
    }, [task.id, todoId])

    const changeTaskTitle = useCallback((title) => {
        dispatch(ActionCreators.changeTaskTitleAC(task.id, title, todoId));
    }, [task.id, todoId]);


    return (
        <TaskContainer>
            <Checkbox
                checked={task.isDone}
                color="primary"
                onChange={changeStatus}
                size={'medium'}
            />
            <EditableSpan title={task.title} callback={changeTaskTitle}/>
            <IconButton size={'medium'} onClick={removeTask}>
                <Delete fontSize={'medium'}/>
            </IconButton>
        </TaskContainer>
    );
});

