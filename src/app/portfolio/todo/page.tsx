'use client';

import Modal from 'react-modal';
import styles from './TodoModal.module.css';
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

    const updateTodos = (newTodos: Todo[]) => {
        setTodos(newTodos);
        if (typeof window !== 'undefined') {
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
    };

    const fetchTodos = async () => {
        if (typeof window === 'undefined') return;

        const saved = localStorage.getItem('todos');
        if (saved) {
            updateTodos(JSON.parse(saved));
        } else {
            try {
                const res = await fetch('/api/todo');
                const data = await res.json();
                updateTodos(data);
            } catch (error) {
                console.error('할 일 목록 가져오기 실패', error);
            }
        }
    };

    const addTodo = async (task: string) => {
        try {
            const res = await fetch('/api/todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ task }),
            });
            const newTodo = await res.json();
            updateTodos([...todos, { ...newTodo, completed: false }]);
        } catch (error) {
            console.error('할 일 추가 실패', error);
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            await fetch(`/api/todo?id=${id}`, { method: 'DELETE' });
            updateTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('할 일 삭제 실패', error);
        }
    };

    const toggleComplete = (id: number) => {
        const updated = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        updateTodos(updated);
    };

    useEffect(() => {
        if (isOpen) {
            fetchTodos();
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            className={modalStyles.modal}
            overlayClassName={modalStyles.overlay}
            onRequestClose={onClose}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
        >
            <h2 className={styles.ls}>📝 체크 리스트</h2>
            <button onClick={onClose} className={modalStyles.close}>✖</button>

            <TodoInput addTodo={addTodo} />
            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </Modal>
    );
}