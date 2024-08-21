
import { TaskList } from "../components/TaskList";
import '../styles/ListaTasks.css'


export function TasksPage() {
  return (
  <div className="lista">
    <h1 style={{textAlign:'center'}}><strong >Canchas Reservadas</strong> </h1>
    <br />
    <TaskList/>

  </div>

)
}


