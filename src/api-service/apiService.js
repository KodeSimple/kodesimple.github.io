import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://3.92.136.168:8000',
    // baseURL: 'http://localhost:8000',
});

export default apiService;