import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../store/store";
import {removeTodo, setTodoStatus} from '../../store/todoSlice';
import { AppDispatch } from '../../store/store';
import Input from "../Input/Input";

import classes from './Todos.module.scss'

const Todos = () => {
    const todoList = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div
            className={classes['todos-wrapper']}
        >
            {
                todoList.length === 0
                    ? (
                        <div
                            className={classes.empty}
                        >
                            Todos is empty
                        </div>
                    )
                    : (
                        <ul
                            className={classes['todos-list']}
                            style={{

                        }}>
                            {todoList.map(todo => (
                                <span
                                    className={classes['todo-item']}
                                    key={todo.id}
                                    style={{
                                        backgroundColor: todo.completed ? '#dedddc' : 'white',
                                    }}
                                >
                                    <li

                                        key={todo.id}
                                        onClick={() => {
                                            dispatch(removeTodo(todo.id));
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            padding: '0.3rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                    {
                                        todo.completed
                                            ? (
                                                <div
                                                    style={{
                                                        textDecoration: 'line-through',
                                                        transition: 'all 0.2s'
                                                    }}
                                                >
                                                    {todo.description}
                                                </div>
                                            )
                                            : (
                                                <div>{todo.description}</div>
                                            )
                                    }
                                    </li>
                                     <Input
                                         type="checkbox"
                                         value={todo.completed}
                                         onChange={() => {
                                             dispatch(
                                                 setTodoStatus({ completed: !todo.completed, id: todo.id })
                                             );
                                         }}
                                     />
                                </span>
                            ))}
                        </ul>
                    )
            }
        </div>
    );
};

export default Todos;