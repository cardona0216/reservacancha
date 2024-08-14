import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";


export function TaskList() {

   const [ tasks, setTaks] = useState([])

    useEffect (() => {
        console.log('pagina cargada');

       async function loadTasks() {
         const res = await  getAllTasks();
         setTaks(res.data)
         console.log(res);
         
            
        }

        loadTasks()
        
    }, [])
  return <div>
    {
        tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))
    }
  </div>
}

