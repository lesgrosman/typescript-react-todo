import React, { useState } from 'react';
import { Navbar } from './components/Navbar'
import { AddTask } from './components/AddTask'
import { TodoList } from './components/TodoList'
import {ITodo} from './Interfaces'

const App: React.FC = () => {

  const [tasks, setTask] = useState<ITodo[]>([])

  const addHandler = (title: string): void => {
    const newTask: ITodo = {
      id: Date.now(),
      title: title,
      done: false
    }
    setTask(prev => [newTask, ...prev])
    
  }

  const onToggleHandler = (taskId: number) => {
    setTask(prev => prev.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    }))
  }

  const onDeleteHandler = (taskId: number) => {
    setTask(prev => prev.filter(task => task.id !== taskId))
  }

  return (
    <>
      <Navbar/>
      <div className="container">
        <AddTask onAdd={addHandler} /> 
        <TodoList 
          tasks={tasks} 
          onToggle={(taskId: number) => onToggleHandler(taskId)}
          onDelete={(taskId: number) => onDeleteHandler(taskId)}         
        />
      </div>
    </>

  );
}

export default App;
