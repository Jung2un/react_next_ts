'use client';

import styles from './todo.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

interface TodoInputProps {
    addTodo: (task: string) => void;
}

export default function TodoInput({ addTodo }: TodoInputProps) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim() === '') return;
        addTodo(task);
        setTask('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    const handleIconClick = () => {
        handleAdd();
    };

    return (
        <div className={styles.inputWrapper}>
            <input
                type="text"
                value={task}
                className={styles.input}
                onKeyDown={handleKeyDown}
                placeholder="할 일을 입력하세요"
                onChange={(e) => setTask(e.target.value)}
            />
            <FontAwesomeIcon
                icon={faPlus}
                onClick={handleIconClick}
                className={styles.inputIcon}
            />
        </div>
    );
}
