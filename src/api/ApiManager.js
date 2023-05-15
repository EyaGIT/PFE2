import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://874c-197-15-37-36.ngrok-free.app',
  responseType: 'json',
  withCredentials: true,
  timeout: 10000
});

export default ApiManager;