import React, { useState, useEffect } from 'react';
import { fetchRandomDigimon } from '../apiGateway';

const DigimonRandomPage: React.FC = () => {
  const [randomDigimon, setRandomDigimon] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomDigimonData = async () => {
      try {
        const data = await fetchRandomDigimon();
        setRandomDigimon(data);
      } catch (error) {
        console.error('Erro ao buscar Digimon aleatório:', error);
        setError('Erro ao buscar Digimon aleatório');
      }
    };

    fetchRandomDigimonData();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Erro ao buscar Digimon</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Digimon Aleatório</h1>
      {randomDigimon && (
        <div>
          <h2>Detalhes do Digimon:</h2>
          <p>Nome: {randomDigimon.name}</p>
          {randomDigimon.images && randomDigimon.images.length > 0 && (
            <div>
              <img
                src={randomDigimon.images[0].href} // URL da imagem fornecido pela API
                alt={randomDigimon.name}
                style={{ width: '200px', height: '200px' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DigimonRandomPage;