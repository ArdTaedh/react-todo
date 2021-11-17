import React, {FC} from 'react';
import {InputProps} from "./Input.props";

import classes from './Input.module.scss'

const Input:FC<InputProps> = ({ value, ...props }) => {
    return (
        <input
            className={classes.input}
            value={value}
            {...props}
        />
    );
};

export default Input;