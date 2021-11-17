import React from 'react';
import {ButtonProps} from "./Button.props";

import classes from './Button.module.scss'

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={classes.button}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;