import React, { useState, useEffect } from 'react';

const DigimonRandomPage: React.FC = () => {
  const [randomDigimon, setRandomDigimon] = useState<any | null>(null);

  useEffect(() => {
    const fetchRandomDigimon = async () => {
      try {
        const response = await fetch('digi-api.com/api/v1/digimon/random');
        const data = await response.json();
        setRandomDigimon(data); // Certifique-se de ajustar de acordo com a estrutura dos dados da Digimon API
      } catch (error) {
        console.error('Erro ao buscar Digimon aleatório:', error);
      }
    };

    fetchRandomDigimon();
  }, []);

  return (
    <div>
      <h1>Digimon Aleatório</h1>
      {randomDigimon && (
        <div>
          <h2>Detalhes do Digimon:</h2>
          {/* Exibir detalhes do Digimon conforme a estrutura dos dados fornecidos pela Digimon API */}
          <p>Nome: {randomDigimon.name}</p>
          <p>Nível: {randomDigimon.level}</p>
        </div>
      )}
    </div>
  );
};

export default DigimonRandomPage;