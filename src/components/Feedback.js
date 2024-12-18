import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

const Feedback = () => {
  const navigate = useNavigate();
  const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
  const [avaliacoes, setAvaliacoes] = useState(Array(diasDaSemana.length).fill(0)); // Estado para guardar as estrelas

  // Função para atualizar as estrelas clicadas
  const handleStarClick = (diaIndex, starIndex) => {
    const novaAvaliacao = [...avaliacoes];
    novaAvaliacao[diaIndex] = starIndex + 1; // Atualiza o número de estrelas (1 a 5)
    setAvaliacoes(novaAvaliacao);
  };
// Função para voltar à página anterior
  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-[90%] max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="bg-green-500 text-white text-xl font-bold p-4 rounded-t-lg flex justify-between items-center">
          <div>Realizar Feedback:</div>

          <button className="hover:underline">sair</button>
          <button
            onClick={handleVoltar}
            className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700">
            Voltar
          </button>
        </div>

        {/* Dias da Semana */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
          {diasDaSemana.map((dia, diaIndex) => (
            <div key={diaIndex} className="bg-gray-100 p-4 rounded-md shadow text-center">
              <h3 className="text-lg font-semibold mb-2">{dia}</h3>
              <div className="flex justify-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, starIndex) => (
                  <button
                    key={starIndex}
                    onClick={() => handleStarClick(diaIndex, starIndex)}
                    className={`text-2xl focus:outline-none ${
                      starIndex < avaliacoes[diaIndex] ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Caixa de Texto */}
        <div className="p-4">
          <textarea
            placeholder="Escrever restrições alimentares ou avaliações do cardápio"
            className="w-full h-24 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        {/* Botão Enviar */}
        <div className="p-4 text-center">
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
