import axios from 'axios';

export function login(email, password) {
    return axios.post('/api/login', { email, password });
}

export function register(name, email, password) {
    return axios.post('/api/register', { name, email, password });
}

export function logout() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
    return axios
        .post('/api/logout', { token: localStorage.getItem('jwt') })
        .then(response => {
            return response;
        })
        .catch(error => {
            if (error.message === 'Token has expired') {
                localStorage.clear();
                window.location.reload();
            }
            return error.response;
        });
}
