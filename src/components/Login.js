import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Para fazer requisições HTTP
import logo from './logo.png'; // Adicione o logo aqui

const Login = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia as credenciais para o backend para validação
      const response = await axios.post('https://engenharia-software-back.onrender.com/usuarios/login', {
        nome,
        senha,
      });
      // Limpa os campos
      setNome('');
      setSenha('');
      // Salva o nome do aluno no localStorage
      localStorage.setItem('nomeAluno', nome);
      // Redireciona para o dashboard
      navigate('/mainpanel');
    } catch (error) {
      // Exibe a mensagem de erro
      alert(error.response?.data?.message || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f0f9ff] opacity-90">
      {/* Lado Esquerdo com a Ilustração */}
      <div className="hidden md:flex flex-1 bg-[#168134] items-center justify-center">
        <img src={logo} alt="fundo" className="w-[100%] h-[100%]" />
      </div>

      {/* Lado Direito com o Formulário */}
      <div className="flex-1 flex items-center justify-center bg-white p-8 shadow-lg">
        <div className="w-full max-w-md">
          {/* Logo e Título */}
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Logo" className="w-16 mb-4" />
            <h2 className="text-3xl font-bold text-[#1e2d40]">LOGIN</h2>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            {/* Campo de Username */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">Usuário</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu usuário"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Campo de Password */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Checkbox e Link */}
            <div className="flex justify-between items-center mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Lembrar senha?</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Esqueceu a senha?
              </Link>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#168134] text-white font-semibold rounded-lg hover:bg-[#3cff73] transition duration-300"
            >
              Entrar
            </button>

            {/* Link para Registro */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{' '}
                <Link to="/select" className="text-blue-500 hover:underline">
                  Inscrever-se
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
