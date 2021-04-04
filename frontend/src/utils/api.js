import axios from 'axios';

const API = axios.create({
  baseURL: 'https://stockappb15.herokuapp.com/'
});

export default API;
