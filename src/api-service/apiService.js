import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://localhost:8000',
});

export default apiService;