import React, {memo, useCallback} from 'react';
import {AddItemForm} from "../../common/AddItemForm/AddItemForm.jsx";
import {Task} from "../../Task/Task.jsx";
import {TodoAC} from "../../../store/action-creators/todolist-action-creators.js";
import {useDispatch, useSelector} from "react-redux";
import {TasksAC} from "../../../store/action-creators/tasks-action-creators.js";
import {CardHeader} from "./CardHeader/CardHeader.jsx";
import {selectFilteredTasks} from "../../../store/selectors/taskSelector.js";
import {Button} from "@mui/material";
import {Card, FilterButtonContainer, NoTasksInfoContainer, TasksContainer} from "./styles.js";

export const Todolist = memo(({title, id, filter}) => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => selectFilteredTasks(state, id, filter))

    const changeTodolistFilter = useCallback((value) => {
        dispatch(TodoAC.changeTodoFilterAC(value, id))
    }, [dispatch])
    const addTask = useCallback(function (title) {
        dispatch(TasksAC.addTaskAC(title, id));
    }, [dispatch]);

    const removeTodolist = useCallback(function () {
        dispatch(TodoAC.removeTodoAC(id));
    }, [dispatch]);

    const changeTodolistTitle = useCallback(function (title) {
        dispatch(TodoAC.changeTodoTitleAC(title, id));
    }, [dispatch]);


    return (
        <Card>
            <CardHeader title={title} callback={changeTodolistTitle} onClick={removeTodolist}/>
            <AddItemForm callBack={addTask}/>
            {
                tasks?.length > 0
                    ?
                    <TasksContainer>
                        {tasks?.map(task => <Task key={task.id} task={task} todoId={id}/>
                        )}
                    </TasksContainer>
                    :
                    <NoTasksInfoContainer>No tasks</NoTasksInfoContainer>
            }
            <FilterButtonContainer>
                <Button size={'small'} variant={filter === "all" ? "outlined" : "text"}
                        onClick={() => changeTodolistFilter('all')} color={'success'}>All
                </Button>
                <Button size={'small'} variant={filter === "active" ? "outlined" : "text"}
                        onClick={() => changeTodolistFilter('active')} color="secondary">Active
                </Button>
                <Button size={'small'} variant={filter === "completed" ? "outlined" : "text"}
                        onClick={() => changeTodolistFilter('completed')} color="primary">Completed
                </Button>
            </FilterButtonContainer>
        </Card>
    );
});