import React, {useCallback} from 'react';
import {TodolistList} from "./components/TodolistList/TodolistList.jsx";
import {AddItemForm} from "./components/common/AddItemForm/AddItemForm.jsx";
import {TodoAC} from "./store/action-creators/todolist-action-creators";
import {useDispatch} from "react-redux";
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer";
import {MainContainer} from "./styles.js";

export const App = () => {
    const dispatch = useDispatch()

    const addTodolist = useCallback((title) => {
        dispatch(TodoAC.addTodoAC(title))
    }, [dispatch]);
    return (
        <div>
            <Header/>
            <MainContainer>
                <AddItemForm callBack={addTodolist}/>
                <TodolistList/>
            </MainContainer>
            <Footer/>
        </div>
    )
}



