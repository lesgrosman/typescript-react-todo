import React, { useState } from 'react'

interface AddTaskProps {
    onAdd(title: string): void
}

export const AddTask: React.FC<AddTaskProps> = props => {

    const [task, setTask] = useState<string>('')

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value)
    }

    const onEnterHandler = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter') {
            props.onAdd(task)
            setTask('')
        }
    }

    return (
        <div className="input-field input">
            <input onKeyPress={onEnterHandler} onChange={onChangeHandler} value={task} id="input" type="text"></input>
            <label htmlFor="input" className="active">Todo List</label>
        </div>
    )
}