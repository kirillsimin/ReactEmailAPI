import axios from 'axios';

export function login(email, password) {
    return axios.post('/api/login', { email, password });
}

export function register(name, email, password) {
    return axios.post('/api/register', { name, email, password });
}
