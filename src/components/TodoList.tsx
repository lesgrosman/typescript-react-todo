import React from 'react'
import { ITodo } from '../Interfaces'
import { FilterBlock } from '../components/FilterBlock'

interface TodoListProps {
    tasks: ITodo[],
    onToggle(taskId: number): void,
    onDelete(taskId: number): void,
    filter: string,
    updateFilter:(filter: string) => void
}

export const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onDelete, filter, updateFilter }) => {
    if (tasks.length === 0 && filter === 'all') {
        return (
            <h4 className="no-tasks">Todo List is empty!</h4>
        )
    }
    return (
        <>
            <FilterBlock
                updateFilter={(filter: string) => updateFilter(filter)}
                filter={filter}
            />
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
        </>
        
    )
}