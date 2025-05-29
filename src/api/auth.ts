import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Reemplaza con tu URL base

export const authService = {
    login: async (email: string, password: string) => {

        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email, password });
            const accessToken = response.data["access_token"]
            localStorage.setItem('jwtToken', accessToken);
            return true
        } catch (error) {
            throw error
        }



    },
    register: async (name: string, lastname: string, email: string, password: string) => {

        try {
            const response = await axios.post(`${API_URL}/auth/register`, { name, lastname, email, password });
            const accessToken = response.data["access_token"]
            localStorage.setItem('jwtToken', accessToken);
            return true
        } catch (error) {
            throw error
        }



    },
};

// Configura interceptors
// Añade token a cada peticion
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Maneja respuesta de error
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('jwtToken');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);