import React, {useEffect, useState} from "react";
import {TodoForm} from "../TodoForm";
import {TodoList} from "../TodoList";
import {ITodo} from "../../interfaces";

export const TodoPage: React.FC = () => {

    const [todo, setTodo] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todo') || '[]') as ITodo[]
        setTodo(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    const addTodo = (inp: string) => {
        const newTodo: ITodo = {
            inp: inp,
            id: Date.now(),
            completed: false
        }
        // setTodo([newTodo, ...todo])
        setTodo(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodo(prev => prev.map(t => {
            if (t.id === id) {
                return {
                    ...t,
                    completed: !t.completed
                }
            }
            return t
        }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('A you really delete?')
        if (shouldRemove) {
            setTodo(prev => prev.filter(t => t.id !== id))
        }
    }

    return <>
        <TodoForm onAdd={addTodo}/>
        <TodoList todo={todo} onToggle={toggleHandler} onRemove={removeHandler}/>
    </>
}