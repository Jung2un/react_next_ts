'use client';

import styles from './TodoModal.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

interface TodoItemProps {
    todo: {
        id: number;
        task?: string;
        completed: boolean;
    };
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, deleteTodo, toggleComplete }: TodoItemProps) {
    return (
        <li className={styles.todoItem}>
            <label className={styles.todoLabel}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
                <span className={todo.completed ? styles.completed : ''}>{todo.task}</span>
            </label>

            <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </li>
    );
}
