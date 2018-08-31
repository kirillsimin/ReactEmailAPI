import axios from 'axios';

export function login(email, password) {
    localStorage.clear();
    return axios
        .post('/api/login', { email, password })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error.response;
        });
}

export function register(name, email, password) {
    localStorage.clear();
    return axios
        .post('/api/register', { name, email, password })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error.response;
        });
}

export function logout() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
    return axios
        .post('/api/logout', { token: localStorage.getItem('jwt') })
        .then(response => {
            return response;
        })
        .catch(error => {
            if (error.response.data.message) {
                localStorage.clear();
                window.location.reload();
            }
            return error.response;
        });
}
