import React, { useState, useEffect } from 'react';
import { fetchRandomPokemon } from '../apiGateway';
import { useNavigate } from 'react-router-dom';

interface PokemonDetails {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  description: string; // Nova propriedade para armazenar a descrição
}

const PokemonRandomPage: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleReload = () => {
    window.location.reload();
  }

  const [randomPokemon, setRandomPokemon] = useState<PokemonDetails | null>(null);
  const [imageDescription, setImageDescription] = useState<string>('');

  useEffect(() => {
    const fetchRandomPokemonData = async () => {
      try {
        const data = await fetchRandomPokemon();
        setRandomPokemon(data);
        setImageDescription(data.description); // Atualiza a descrição com base na API
      } catch (error) {
        console.error('Erro ao buscar Pokémon aleatório:', error);
      }
    };

    fetchRandomPokemonData();
  }, []);

  return (
    <div>
      <h1>Pokemon Aleatório</h1>
      {randomPokemon && (
        <div>
          <h2>Detalhes do Pokémon:</h2>
          <p>Nome: {randomPokemon.name}</p>
          <p>Tipagem:</p>
          <ul>
            {randomPokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          {/* Descrição da imagem */}
          <p>Descrição da imagem: {imageDescription}</p>
          {/* Imagem */}
          {randomPokemon.sprites && (
            <div>
              <img
                src={randomPokemon.sprites.front_default}
                alt={randomPokemon.name}
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

export default PokemonRandomPage;
