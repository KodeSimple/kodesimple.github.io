import axios from 'axios';

const apiService = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:8000',
=======
    baseURL: 'http://3.92.136.168:8000',
    // baseURL: 'http://localhost:8000',
>>>>>>> 9b6f5e99f9b00d0f57144162a9915d87b8ed2fab
});

export default apiService;