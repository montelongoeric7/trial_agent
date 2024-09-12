'use client'

import { useState } from 'react'

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
  ])

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const addTask = () => {
    const newTask = { id: Date.now(), text: `Task ${tasks.length + 1}`, completed: false }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <p className="text-gray-600 mb-4">Add any tasks that need to be completed today. Click run.</p>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={`flex-grow ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  )
}