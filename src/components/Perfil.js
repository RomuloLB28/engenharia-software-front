import React from "react";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const navigate = useNavigate();

  // Função para voltar à tela anterior
  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-[90%] max-w-lg bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="bg-green-500 text-white text-xl font-bold p-4 rounded-t-lg text-center">
          Perfil do Usuário
        </div>

        {/* Foto de Perfil */}
        <div className="flex flex-col items-center mt-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Foto de Perfil"
            className="w-32 h-32 rounded-full border-4 border-green-500"
          />
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">Nome do Usuário</h2>
          <p className="text-gray-500">usuario@email.com</p>
        </div>

        {/* Informações do Perfil */}
        <div className="mt-6 space-y-4">
          {/* Matrícula */}
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow">
            <span className="text-gray-600 font-medium">Matrícula:</span>
            <span className="text-gray-800">2024001234</span>
          </div>

          {/* Turno */}
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow">
            <span className="text-gray-600 font-medium">Turno:</span>
            <span className="text-gray-800">Noturno</span>
          </div>

          {/* Senha */}
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow">
            <span className="text-gray-600 font-medium">Senha:</span>
            <input
              type="password"
              value="********"
              disabled
              className="text-gray-800 bg-transparent border-none focus:outline-none"
            />
          </div>
        </div>

        {/* Botões */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleVoltar}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
          >
            Voltar
          </button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
