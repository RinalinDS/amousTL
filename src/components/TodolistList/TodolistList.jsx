import React from 'react';
import {Todolist} from "./Todolist/Todolist.jsx";
import {useSelector} from "react-redux";
import {todosSelector} from "../../store/selectors/todoSelectors.js";
import {TodolistContainer} from "./styles.js";

export const TodolistList = () => {
    const todolists = useSelector(todosSelector)

    return (
        <TodolistContainer>
            {todolists.map(tl =>
                <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    filter={tl.filter}
                />)}
        </TodolistContainer>
    )
}


