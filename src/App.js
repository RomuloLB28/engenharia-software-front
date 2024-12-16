import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../src/components/Login';
import Register from "../src/components/Register"; // Certifique-se de ter criado a tela de cadastro

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota inicial redirecionando para Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Rotas corretas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
