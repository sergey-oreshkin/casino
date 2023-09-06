import React from "react";
import classes from './FormButton.module.css';

const FormButton = (props) => {
    return (
        <button className={classes.formButton} {...props}>
            {props.children}
        </button>
    )
}

export default FormButton;