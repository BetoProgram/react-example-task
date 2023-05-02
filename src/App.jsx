import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


function App() {
    
    return(
        <main className="bg-zinc-900 h-screen">
            <div className="mx-auto container p-10">
                <TaskForm />
                <TaskList />
            </div>
        </main>
    )
}

export default App
