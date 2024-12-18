import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Importe seu logo

const Select = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // Passa a escolha do papel para a tela de Register via navegação
    navigate('/register', { state: { role } });
  };

  return (
    <div className="flex min-h-screen bg-[#f0f9ff] opacity-90 justify-center items-center">
      <div className="w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-[#1e2d40] mb-6">Escolha sua função</h2>

        {/* Botões para selecionar a função */}
        <div className="flex flex-col items-center space-y-4">
          {/* Botão para Aluno */}
          <button
            onClick={() => handleRoleSelect('aluno')}
            className="w-full p-4 bg-[#168134] text-white font-semibold rounded-lg hover:bg-[#3cff73] transition duration-300"
          >
            <img src={logo} alt="Aluno" className="w-16 h-16 mx-auto mb-2" />
            Aluno
          </button>

          {/* Botão para Copeira */}
          <button
            onClick={() => handleRoleSelect('copeira')}
            className="w-full p-4 bg-[#168134] text-white font-semibold rounded-lg hover:bg-[#3cff73] transition duration-300"
          >
            <img src={logo} alt="Copeira" className="w-16 h-16 mx-auto mb-2" />
            Copeira
          </button>

          {/* Botão para Nutricionista */}
          <button
            onClick={() => handleRoleSelect('nutricionista')}
            className="w-full p-4 bg-[#168134] text-white font-semibold rounded-lg hover:bg-[#3cff73] transition duration-300"
          >
            <img src={logo} alt="Nutricionista" className="w-16 h-16 mx-auto mb-2" />
            Nutricionista
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select;
