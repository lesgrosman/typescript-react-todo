import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar'
import { AddTask } from './components/AddTask'
import { TodoList } from './components/TodoList'
import {ITodo} from './Interfaces'

const App: React.FC = () => {

  const [tasks, setTask] = useState<ITodo[]>([])
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks') || '[]') as ITodo[]
    setTask(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  /////////////////////////////

  const addHandler = (title: string): void => {
    const newTask: ITodo = {
      id: Date.now(),
      title: title,
      done: false
    }
    setTask(prev => [newTask, ...prev])
    setFilter('all')
    
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
    setFilter('all')
  }

  const onDeleteHandler = (taskId: number) => {
    setTask(prev => prev.filter(task => task.id !== taskId))
  }

  const updateFilter = (filter: string) => {
    setFilter(filter)
  }

  const filterTasks = (tasks: ITodo[], filter: string) => {
    switch (filter) {
      case 'all':
        return tasks
      case 'active':
        return tasks.filter(task => !task.done)
      case 'done':
        return tasks.filter(task => task.done)
    }
  }

  return (
    <>
      <Navbar/>
      <div className="container">
        <AddTask onAdd={addHandler} /> 
        <TodoList 
          updateFilter={(filter: string) => updateFilter(filter)}
          filter={filter}
          tasks={filterTasks(tasks, filter)!} 
          onToggle={(taskId: number) => onToggleHandler(taskId)}
          onDelete={(taskId: number) => onDeleteHandler(taskId)}         
        />
      </div>
    </>

  );
}

export default App;
