import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true, // Importante para enviar cookies e credenciais
});

export default api;
