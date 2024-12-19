import axios from 'axios';

const api = axios.create({
  baseURL: 'https://engenharia-software-back.onrender.com',
  withCredentials: true, // Importante para enviar cookies e credenciais
});

export default api;
