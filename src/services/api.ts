import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Substitua pela URL do seu servidor backend
});

export default api;
