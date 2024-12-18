import React, { useState,useEffect } from 'react';
import { useLocation,Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.png'; // Importe seu logo

const Register = () => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [turno, setTurno] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const { role } = location.state || {};

  useEffect(() => {
    if (!role) {
      navigate('/select');
    }
  }, [role, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/usuarios/register', {
        nome,
        matricula,
        email,
        senha_hash: senha,
        tipo_usuario: role,
        turno,
      });

      setSuccess(response.data.message || 'Cadastro realizado com sucesso!');
      setError('');
      setNome('');
      setMatricula('');
      setEmail('');
      setSenha('');
      setTurno('');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'Erro ao realizar o cadastro.');
      setSuccess('');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f0f9ff] opacity-90">
      <div className="hidden md:flex flex-1 bg-[#168134] items-center justify-center">
        <img src={logo} alt="fundo" className="w-[100%] h-[100%]" />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white p-8 shadow-lg">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Logo" className="w-16 mb-4" />
            <h2 className="text-3xl font-bold text-[#1e2d40]">CADASTRE-SE</h2>
            <p className="text-sm text-gray-600 mt-1">Preencha os dados abaixo para criar sua conta</p>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">Nome de Usuário</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">Matrícula</label>
              <input
                type="text"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Mostrar o campo turno apenas se o role não for copeira ou nutricionista */}
            {(role !== 'copeira' && role !== 'nutricionista') && (
              <div className="mb-4">
                <label className="block mb-1 text-gray-600 font-bold">Turno</label>
                <select
                  value={turno}
                  onChange={(e) => setTurno(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Selecione o turno</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#168134] text-white font-semibold rounded-lg hover:bg-[#3cff73] transition duration-300"
            >
              Cadastrar
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Faça o login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
