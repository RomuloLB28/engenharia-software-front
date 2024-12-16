import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Importe seu logo

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-gray text-white w-full max-w-md rounded-xl shadow-lg">
        {/* Logo e Texto */}
        <div className="h-32 bg-[#09ba65] rounded-t-xl flex flex-col items-center justify-center p-4">
          <img src={logo} alt="Logo" className="w-16 mb-1" />
          {/* Texto de boas-vindas */}
          <h1 className="text-2xl font-bold text-white text-center mb-1">
            CADASTRE-SE NO NUTRI IFPA!
          </h1>
          {/* Subtítulo */}
          <h3 className="text-sm text-gray-200 text-center mb-1">
            Preencha os dados abaixo para criar sua conta
          </h3>
        </div>

        {/* Formulário */}
        <form className="p-6 bg-white rounded-b-xl shadow-md">
          {/* Nome de Usuário */}
          <div className="relative mb-4">
            <p className="relative mb-1 text-black font-bold">Nome de Usuário</p>
            <input
              type="text"
              required
              className="w-full text-black pl-2 pr-4 py-2 text-lg border border-[#1e2d4063] rounded-md focus:border-[#1e2d40cf] outline-none"
            />
          </div>

          {/* Matrícula */}
          <div className="relative mb-4">
            <p className="relative mb-1 text-black font-bold">Matrícula</p>
            <input
              type="text"
              required
              className="w-full text-black pl-2 pr-4 py-2 text-lg border border-[#1e2d4063] rounded-md focus:border-[#1e2d40cf] outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <p className="relative mb-1 text-black font-bold">E-mail</p>
            <input
              type="email"
              required
              className="w-full text-black pl-2 pr-4 py-2 text-lg border border-[#1e2d4063] rounded-md focus:border-[#1e2d40cf] outline-none"
            />
          </div>

          {/* Senha */}
          <div className="relative mb-4">
            <p className="relative mb-1 text-black font-bold">Senha</p>
            <input
              type="password"
              required
              className="w-full text-black pl-2 pr-4 py-2 text-lg border border-[#1e2d4063] rounded-md focus:border-[#1e2d40cf] outline-none"
            />
          </div>

          {/* Turno */}
          <div className="relative mb-6">
            <p className="relative mb-1 text-black font-bold">Turno</p>
            <select
              required
              className="w-full text-black pl-2 pr-4 py-2 text-lg border border-[#1e2d4063] rounded-md focus:border-[#1e2d40cf] outline-none"
            >
              <option value="">Selecione o turno</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
            </select>
          </div>

          {/* Botão de Cadastro */}
          <div className="mb-4">
            <button className="w-full py-2 text-lg font-semibold bg-[#09ba65] text-white rounded-md hover:bg-[#059e52]">
              Cadastrar
            </button>
          </div>

          {/* Link para voltar ao Login */}
          <div className="text-center">
            <p className="relative mb-1 text-black font-bold">Já tem uma conta?</p>
            <Link to="/login" className="text-[#1e2d40] text-sm hover:underline">
              Faça o login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
