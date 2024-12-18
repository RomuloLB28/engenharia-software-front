import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

const Mensagens = () => {
  const navigate = useNavigate();
  // Função para voltar à página anterior
  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-[90%] max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-green-500 text-white text-xl font-bold p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">
              <img
                src="https://via.placeholder.com/40" // Ícone substituto
                alt="Logo"
                className="w-8 h-8 rounded-full"
              />
            </span>
            <span>Mensagens:</span>
          </div>
          <button className="hover:underline">sair</button>
          <button
            onClick={handleVoltar}
            className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700">
            Voltar
          </button>
        </div>

        {/* Lista de Mensagens */}
        <div className="p-4">
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <li
                key={item}
                className="bg-gray-100 p-4 rounded-md flex items-center shadow hover:bg-gray-200 cursor-pointer"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 mr-4">
                  <span>👤</span>
                </div>
                <div className="flex-1 text-gray-700">Mensagem {item}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão Adicionar */}
        <div className="p-4 flex justify-end">
          <button className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mensagens;
