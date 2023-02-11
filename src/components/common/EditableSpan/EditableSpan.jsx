import React, {memo, useState} from "react";
import {Container, ErrorText, StyledInput, StyledSpan} from "./styles.js";


export const EditableSpan = memo(({title, callback}) => {
    let [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(title)
    let [error, setError] = useState(null)


    const onDoubleClickHandler = () => {
        setEdit(true)
    }

    const onEnterKeyPressHandler = (e) => {
        if (error) {
            setError(null)
        }
        if (e.key === 'Enter') {
            onBlurHandler()
        }
    }

    const onBlurHandler = () => {
        if (newTitle.trim()) {
            callback(newTitle.trim())
            setEdit(false)
        } else {
            setError("Title is required")
        }

    }

    const onSetNewTitleHandler = (e) => setNewTitle(e.currentTarget.value)

    return (
        edit
            ? <Container>
                <StyledInput type={'text'} onKeyDown={onEnterKeyPressHandler} value={newTitle} onBlur={onBlurHandler}
                       autoFocus onChange={onSetNewTitleHandler}/>
                {error && <ErrorText style={{color: 'red', fontSize:'1rem', alignSelf:'center'}}>{error}</ErrorText>}
            </Container>
            : <StyledSpan onDoubleClick={onDoubleClickHandler}>{title}</StyledSpan>

    )
})

