import React from 'react';

import {Delete} from '@mui/icons-material';
import {IconButton} from '@mui/material';

import {EditableSpan} from "../../../common/EditableSpan/EditableSpan.jsx";
import {StyledCardHeader} from "./styles.js";


export const CardHeader = ({title, callback, onClick}) => {
    return (
        <StyledCardHeader>
            <EditableSpan title={title} callback={callback}/>
            <IconButton
                size="medium"
                onClick={onClick}
            >
                <Delete fontSize="small"/>
            </IconButton>
        </StyledCardHeader>
    );
};

