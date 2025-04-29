'use client';

import styles from './TodoModal.module.css';
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
                placeholder="입력"
                className={styles.input}
                onKeyDown={handleKeyDown}
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
