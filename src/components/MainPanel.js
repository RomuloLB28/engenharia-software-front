import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Importe seu logo


const MainPanel = () => {
  const [nomeAluno, setNomeAluno] = useState('');
  const navigate = useNavigate();

  // Recupera o nome do aluno do localStorage
  useEffect(() => {
    const nome = localStorage.getItem('nomeAluno') || 'Aluno';
    setNomeAluno(nome);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Cabeçalho */}
      <header className="bg-green-600 text-white w-full p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold">Olá, ({nomeAluno})</span>
        </div>
        <button
          onClick={() => handleNavigation('/login')}
          className="text-white text-sm underline hover:text-gray-300"
        >
          sair
        </button>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow flex flex-col items-center mt-10">
        <h2 className="text-2xl mb-8 font-semibold">O que deseja fazer hoje?</h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Botão Visualizar Perfil */}
          <div
            className="flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() => handleNavigation('/perfil')}
          >
            <img src={logo} alt="Perfil" className="w-16 h-16 mb-2" />
            <span className="text-lg font-semibold text-gray-700">Visualizar / alterar perfil</span>
          </div>

          {/* Botão Visualizar Cardápio */}
          <div
            className="flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() => handleNavigation('/menu')}
          >
            <img src={logo} alt="Cardápio" className="w-16 h-16 mb-2" />
            <span className="text-lg font-semibold text-gray-700">Visualizar cardápio</span>
          </div>

          {/* Botão Realizar Feedback */}
          <div
            className="flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() => handleNavigation('/feedback')}
          >
            <img src={logo} alt="Feedback" className="w-16 h-16 mb-2" />
            <span className="text-lg font-semibold text-gray-700">Realizar feedback</span>
          </div>

          {/* Botão Visualizar Mensagens */}
          <div
            className="flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() => handleNavigation('/mensagens')}
          >
            <img src={logo} alt="Mensagens" className="w-16 h-16 mb-2" />
            <span className="text-lg font-semibold text-gray-700">Visualizar Mensagens</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPanel;
