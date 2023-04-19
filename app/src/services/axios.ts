import axios from 'axios';
import { getIdToken } from 'firebase/auth';
import { auth } from './firebase';

const api = axios.create({
    baseURL: `http://localhost:8000`,
    responseType: 'json'
});

api.interceptors.request.use(async (config) => {
    const token = await auth.currentUser?.getIdToken() as string;

    config.headers!['Authorization'] = token;

    console.log(token);
    

    return config;
});


export default api;