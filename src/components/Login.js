import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Importe seu logo

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-gray text-white w-full max-w-md rounded-xl shadow-lg">
        {/* Logo e Texto */}
        <div className="h-32 bg-[#09ba65] rounded-t-xl flex flex-col items-center justify-center p-4">
          <img src={logo} alt="Logo" className="w-16 mb-1" />
          {/* Texto de boas-vindas */}
          <h1 className="text-2xl font-bold text-white text-center mb-1">
            BEM VINDOS AO NUTRI IFPA!
          </h1>
          {/* Subtítulo */}
          <h3 className="text-sm text-gray-200 text-center mb-1">
            Monitorando e orientando sua alimentação
          </h3>
        </div>

        {/* Formulário */}
        <form className="p-6 bg-white rounded-b-xl shadow-md">
          {/* Input de Matricula */}
          <div className="relative mb-6">
            <i className="fas fa-user absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
            <input
              type="text"
              required
              placeholder='Usuário'
              className="w-full text-black pl-2 pr-4 py-2 text-lg border border-[#1e2d4063] rounded-md focus:border-[#1e2d40cf] outline-none"
            />
          </div>

          {/* Input de Senha */}
          <div className="relative mb-6">
            <i className="fas fa-lock absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
            <input
              type="password"
              required
              placeholder='Senha'
              className="w-full pl-2 text-black pr-4 py-2 text-lg border border-[#1e2d4063] rounded-md focus:border-[#1e2d40cf] outline-none"
            />
          </div>

          {/* Botão de Login */}
          <div className="mb-4">
            <button className="w-full py-2 text-lg font-semibold bg-[#168134] text-white rounded-md hover:bg-[#059e52]">
              Login
            </button>
          </div>

          {/* Link para recuperação de senha */}
          <div className="text-right">
            <p className="relative mb-1 text-black font-bold">Não tem uma conta?</p>
            <Link to="/register" className="text-[#1e2d40] text-sm hover:underline">
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
