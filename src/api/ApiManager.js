import axios from 'axios';
import io from 'socket.io-client';
import { WEBSOCKET_URL, API_BASE_URL } from '@env';



export const socket = io(WEBSOCKET_URL);

export const ApiManager = axios.create({
  baseURL: API_BASE_URL,
  responseType: 'json',
  withCredentials: false,
  timeout: 60000
});

