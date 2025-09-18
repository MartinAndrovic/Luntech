import axios from 'axios';

const axiosForToken = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
});

export default axiosForToken;
