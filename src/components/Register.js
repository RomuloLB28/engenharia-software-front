import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Importe seu logo
import fundo from './fundo.jpeg'; // Importe a imagem de fundo

const Register = () => {
  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      {/* Lado Esquerdo com a Ilustração */}
      <div className="hidden md:flex flex-1 bg-[#168134] items-center justify-center">
        <img
          src={logo}
          alt="fundo"
          className="w-[100%] h-[100%]"
        />
      </div>

      {/* Lado Direito com o Formulário */}
      <div className="flex-1 flex items-center justify-center bg-white p-8 shadow-lg">
        <div className="w-full max-w-md">
          {/* Logo e Título */}
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Logo" className="w-16 mb-4" />
            <h2 className="text-3xl font-bold text-[#1e2d40]">CADASTRE-SE</h2>
            <p className="text-sm text-gray-600 mt-1">
              Preencha os dados abaixo para criar sua conta
            </p>
          </div>

          {/* Formulário */}
          <form>
            {/* Nome de Usuário */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">
                Nome de Usuário
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Matrícula */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">
                Matrícula
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* E-mail */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">
                E-mail
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Senha */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">
                Senha
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Turno */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 font-bold">
                Turno
              </label>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Selecione o turno</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
              </select>
            </div>

            {/* Botão de Cadastro */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#168134] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Cadastrar
            </button>

            {/* Link para Login */}
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
