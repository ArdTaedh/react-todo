import React, { useState } from 'react';

import classes from './App.module.scss'
import Heading from "./components/Heading/Heading";
import Todos from "./components/Todos/Todos";
import {useDispatch} from "react-redux";
import { addTodo } from './store/todoSlice';
import { AppDispatch } from './store/store';
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

const App = () => {
    const [todoDescription, setTodoDescription] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const addTodoHandler = () => {
        if (todoDescription === '') {
            alert('Enter a todo description')
        }
        else {
            dispatch(addTodo(todoDescription));
            setTodoDescription("");
        }
    }

    return (
        <div className={classes.app}>
            <Heading
                tag="h1"
                align="center"
            >
                Todo Manager
            </Heading>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0.5rem 0 1rem 0'

            }}>
                <Input
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoDescription(e.target.value)}
                    value={todoDescription} />
                <Button
                    onClick={addTodoHandler}
                >
                    Add ToDo
                </Button>
            </div>
            <Todos />
        </div>
    );
};

export default App;