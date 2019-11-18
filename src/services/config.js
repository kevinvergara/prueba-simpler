import axios from 'axios';

const url_back = 'http://18.217.231.169:8080/';

const API = axios.create({
    baseURL: url_back,
});

export default API;