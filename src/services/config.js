import axios from 'axios';

const url_back = 'https://jsonplaceholder.typicode.com/';

const API = axios.create({
    baseURL: url_back,
});

export default API;