import React from 'react'
import { ITodo } from '../Interfaces'

interface TodoListProps {
    tasks: ITodo[],
    onToggle(taskId: number): void,
    onDelete(taskId: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onDelete }) => {
    return (
        <ul>
            {tasks.map(task => {
                const classes = ['task']
                if (task.done) {
                    classes.push('done')
                }
                return (
                    <li key={task.id} className={classes.join(' ')}>
                        <label>
                            <input onChange={() => onToggle(task.id)} checked={task.done} type="checkbox"></input>
                            <span>{task.title}</span>
                            <i onClick={() => onDelete(task.id)} className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}