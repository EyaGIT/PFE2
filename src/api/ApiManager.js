import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://2552-197-10-217-213.ngrok-free.app',
  responseType: 'json',
  withCredentials: true,
  timeout: 10000
});

export default ApiManager;