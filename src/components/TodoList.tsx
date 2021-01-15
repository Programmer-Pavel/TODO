import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todo: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todo, onRemove, onToggle}) => {
    if (todo.length === 0) {
        return <p className="center">Пока дел нет!</p>
    }

    const checkedNo = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return <ul>
        {todo.map(t => {
            const classes = ['todo']
            if (t.completed) {
                classes.push('completed')
            }
            return <li className={classes.join(' ')} key={t.id}>
                <label>
                    <input type="checkbox" checked={t.completed} onChange={() => onToggle(t.id)}/>
                    <span>{t.inp}</span>
                    <i className="material-icons black-text" onClick={event => checkedNo(event, t.id)}>delete</i>
                </label>
            </li>
        })}
    </ul>
}
