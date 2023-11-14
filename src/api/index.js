import axios from 'axios';

const api = axios.create({
 baseURL: process.env.REACT_APP_API_BASE_URL,
 mode: 'cors',
 cache: 'default',
 credentials: 'include',
 headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
 },
});

export default api;