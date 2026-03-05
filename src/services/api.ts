import axios from 'axios';

const api = axios.create({
  baseURL: '', // Usando URL relativa para funcionar no servidor
});

export default api;
