import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {createTask, id} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        id,
        title,
        description
    }
    createTask(newTask);

    setTitle('')
    setDescription('')
  }

  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
            <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
            <input placeholder='Escribe tu tarea' className='bg-slate-300 p-3 w-full mb-2'
            onChange={(e) => setTitle(e.target.value)} value={title} autoFocus />

            <textarea onChange={(e) => setDescription(e.target.value)} 
            value={description} className='bg-slate-300 p-3 w-full mb-2'></textarea>
            <button className='bg-indigo-500 text-white px-3 py-1'>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm