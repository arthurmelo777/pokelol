import React, { useState, useEffect } from 'react';

interface PokemonDetails {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

const PokemonRandomPage: React.FC = () => {
  const [randomPokemon, setRandomPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const randomId = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        setRandomPokemon(data);
      } catch (error) {
        console.error('Erro ao buscar Pokémon aleatório:', error);
      }
    };

    fetchRandomPokemon();
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
    </div>
  );
};

export default PokemonRandomPage;