import axios from 'axios';

const url_back = 'http://127.0.0.1:8080/';

const API = axios.create({
    baseURL: url_back,
});

export default API;