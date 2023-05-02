import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])
    const [id, setId] = useState(0)

    const createTask = (task) => {
        setTasks([...tasks, task])
        setId(tasks.length + 1)
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTasks(data)
    },[])

    return (
        <TaskContext.Provider value={{
            tasks,
            id,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
