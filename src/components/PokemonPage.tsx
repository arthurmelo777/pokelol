import React, { useState, useEffect } from 'react';
import { fetchRandomPokemon } from '../apiGateway';
import { useNavigate } from 'react-router-dom';

interface PokemonDetails {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

const PokemonRandomPage: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const [randomPokemon, setRandomPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchRandomPokemonData = async () => {
      try {
        const data = await fetchRandomPokemon();
        setRandomPokemon(data);
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
          {/* Esses sprites é como a gente chama a imagem dos pokemons */}
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
    </div>
  );
};

export default PokemonRandomPage;