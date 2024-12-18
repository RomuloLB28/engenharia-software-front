import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

const Menu = () => {
  const navigate = useNavigate();

  // Estado para abrir/fechar os dias
  const [diasAbertos, setDiasAbertos] = useState({
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
  });

  // Alternar abrir/fechar conteúdo do dia
  const toggleDia = (dia) => {
    setDiasAbertos((prev) => ({
      ...prev,
      [dia]: !prev[dia],
    }));
  };

  // Função para voltar à página anterior
  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="w-full bg-green-600 text-white flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Visualizar cardápio:</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleVoltar}
            className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
          >
            Voltar
          </button>
          <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-400">
            Sair
          </button>
        </div>
      </header>

      {/* Lista de Dias */}
      <div className="w-3/4 mt-8 space-y-4">
        {Object.entries(diasAbertos).map(([dia, aberto]) => (
          <div key={dia} className="bg-gray-300 rounded-md overflow-hidden">
            {/* Título do Dia */}
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-400"
              onClick={() => toggleDia(dia)}
            >
              <span className="text-lg font-semibold">
                {dia.charAt(0).toUpperCase() + dia.slice(1)}-feira
              </span>
              <span className="text-xl">{aberto ? "▲" : "▼"}</span>
            </div>

            {/* Conteúdo do Dia */}
            {aberto && (
              <div className="bg-white p-4 text-gray-600">
                <p>Conteúdo do cardápio de {dia}-feira.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
