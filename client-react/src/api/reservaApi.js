import axios from "axios";

const reservaApi = axios.create({
    baseURL: 'http://localhost:8000/reserva/api/v1/reserva/'
});


reservaApi.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`
    }
    return config;
} , error => {
    return Promise.reject(error)
});

export const getAllReservas = () => {
    return reservaApi.get('/');
};