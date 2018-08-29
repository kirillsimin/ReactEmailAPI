import axios from 'axios';

function setToken() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
}

export function send(subject, text) {
    setToken();
    return axios.post('/api/emails', { subject, text });
}

export function view() {
    setToken();
    return axios.get('/api/emails');
}