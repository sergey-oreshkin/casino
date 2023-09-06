import axios from "axios";
import { hostUrl } from "./constants";

const ApiClient = axios.create({
    baseURL: hostUrl,
    timeout: 1000,
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
});

ApiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token !== null) {
        config.headers['Auth'] = token;
    }
    return config;
});

export default ApiClient;