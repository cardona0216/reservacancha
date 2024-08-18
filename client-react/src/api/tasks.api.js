
import axios from 'axios';



const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tarea/'
})

export const getAllTasks = () => {
    return taskApi.get('/')
}

export const getTask = (id) => {
    return taskApi.get(`/${id}/`)
}

export const createTask = (task) => {
    return taskApi.post('/', task)
}

export const deleteTasks = (id) => taskApi.delete(`/${id}/`)

export const updateTask = (id, task) => taskApi.put(`/${id}/`, task)