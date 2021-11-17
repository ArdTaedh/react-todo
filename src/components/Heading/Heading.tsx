import cn from 'classnames'

import classes from './Heading.module.scss'
import {HeadingProps} from "./Heading.props";

const Heading = ({ tag, children, align="left" }: HeadingProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return (
                <h1
                    className={cn(classes.h1, {
                        [classes.left]: align === 'left',
                        [classes.center]: align === 'center',
                        [classes.right]: align === 'right'
                    })}
                >
                    {children}
                </h1>
            )
        case "h2":
            return (
                <h2
                    className={cn(classes.h2, {
                        [classes.left]: align === 'left',
                        [classes.center]: align === 'center',
                        [classes.right]: align === 'right'
                    })}
                >
                    {children}
                </h2>
            )
        case "h3":
            return (
                <h3
                    className={cn(classes.h3, {
                        [classes.left]: align === 'left',
                        [classes.center]: align === 'center',
                        [classes.right]: align === 'right'
                    })}
                >
                    {children}
                </h3>
            )
    }
};

export default Heading;