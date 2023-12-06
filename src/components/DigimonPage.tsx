import React, { useState, useEffect } from 'react';
import { fetchRandomDigimon } from '../apiGateway';
import { useNavigate } from 'react-router-dom';

interface DigimonDetails {
  name: string;
  images: { href: string }[];
  description: string; // Nova propriedade para armazenar a descrição
}

const DigimonRandomPage: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleReload = () => {
    window.location.reload();
  }

  const [randomDigimon, setRandomDigimon] = useState<DigimonDetails | null>(null);
  const [imageDescription, setImageDescription] = useState<string>('');

  useEffect(() => {
    const fetchRandomDigimonData = async () => {
      try {
        const data = await fetchRandomDigimon();
        setRandomDigimon(data);
        setImageDescription(data.description); // Atualiza a descrição com base na API
      } catch (error) {
        console.error('Erro ao buscar Digimon aleatório:', error);
        // Se houver um erro ao buscar, você pode definir uma descrição padrão ou deixar vazia
        setImageDescription('Erro ao buscar Digimon aleatório');
      }
    };

    fetchRandomDigimonData();
  }, []);

  return (
    <div>
      <h1>Digimon Aleatório</h1>
      {randomDigimon && (
        <div>
          <h2>Detalhes do Digimon:</h2>
          <p>Nome: {randomDigimon.name}</p>
          {/* Descrição da imagem */}
          <p>Descrição da imagem: {imageDescription}</p>
          {/* Imagem */}
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

      <button onClick={handleHomeClick}>Voltar</button>
      <button onClick={handleReload}>↺</button>
    </div>
  );
};

export default DigimonRandomPage;
