
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";


function App() {
  return (
    <BrowserRouter>
    <div style={{ display: 'flex' }}>
      <Navigation/>
      <main style={{ marginLeft: '350px', padding: '20px', flexGrow: 1 }}>
      <h1>Reserva</h1>
      <Routes>
        <Route path='/' element={<Navigate to='/tasks'/>}></Route>
        <Route path='/tasks' element={<TasksPage/>}></Route>
        <Route path='/tasks-create' element={<TasksFormPage/>}></Route>
      </Routes>

      </main>

    </div>
    </BrowserRouter>
  )
}

export default App