import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://22e2-197-3-220-21.ngrok-free.app',
  responseType: 'json',
  withCredentials: true,
  timeout: 10000
});

export default ApiManager;