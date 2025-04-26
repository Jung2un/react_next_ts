'use client';

import Modal from 'react-modal';
import styles from './todo.module.css';
import {useState, useEffect} from 'react';
import useModalEffect from "@/hooks/useModalEffect";
import TodoItem from '@/app/portfolio/todo/TodoItem';
import TodoInput from '@/app/portfolio/todo/TodoInput';
import modalStyles from '../../../styles/modal.module.css';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

interface TodoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TodoModal(props: TodoModalProps) {
    const {isOpen, onClose} = props;
    const [todos, setTodos] = useState<Todo[]>([]);

    useModalEffect(isOpen);

    useEffect(() => {
        if (isOpen) {
            fetchTodos();
        }
    }, [isOpen]);

    const fetchTodos = async () => {
        const res = await fetch('/api/todo');
        const data = await res.json();
        setTodos(data);
    };

    const addTodo = async (task: string) => {
        const res = await fetch('/api/todo/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task}),
        });
        const newTodo = await res.json();
        setTodos(prev => [...prev, {...newTodo, completed: false}]);
    };

    const deleteTodo = async (id: number) => {
        await fetch(`/api/todo?id=${id}`, {
            method: 'DELETE',
        });
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            className={modalStyles.modal}
            overlayClassName={modalStyles.overlay}
            onRequestClose={onClose}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        >
            <h2 className={styles.ls}>📝 체크 리스트</h2>
            <button onClick={onClose} className={modalStyles.close}>✖</button>

            <TodoInput addTodo={addTodo}/>
            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
                ))}
            </ul>

        </Modal>
    );
}