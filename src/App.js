import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import api from './Api'; // Serviço de API
import Login from './components/Login';
import Register from "./components/Register";
import Select from './components/Select';
import MainPanel from './components/MainPanel';
import Menu from './components/Menu';
import Feedback from './components/Feedback';
import Mensagens from './components/Mensagens';
import Perfil from './components/Perfil';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);  

  return (
    <Router>
      <Routes>
        {/* Rota inicial redirecionando para Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rotas principais */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select" element={<Select />} />
        <Route path="/mainpanel" element={<MainPanel />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/mensagens" element={<Mensagens />} />
        <Route path="/perfil" element={<Perfil />} />

        {/* Exemplo de exibição dos dados da API em uma rota adicional */}
        <Route
          path="/data"
          element={
            <div>
              <h1>Dados da API</h1>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
