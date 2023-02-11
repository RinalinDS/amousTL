import React, {memo} from "react";
import {IconButton, TextField} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import styles from './AddItemForm.module.css'
import {useFormik} from "formik";


export const AddItemForm = memo(({callBack}) => {
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validate: values => {
            const errors = {};
            if (!values.title) {
                errors.title = 'Title is required';
            } else if (values.title.length > 60) {
                errors.title = 'Length should not be greater than 60 signs';
                formik.resetForm()
            }
            return errors;
        },
        onSubmit: values => {
            callBack(values.title)
            formik.resetForm()
        },
    });

    const {onChange, value, name} = formik.getFieldProps('title')

    return (
        <form onSubmit={formik.handleSubmit} className={styles.container}>
            <TextField
                className={styles.textField}
                name={name}
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!formik.errors.title}
                label="Title"
                helperText={formik.errors.title}
            />
            <IconButton color='primary' type={'submit'} className={styles.button}>
                <AddBoxIcon/>
            </IconButton>
        </form>
    )
})

