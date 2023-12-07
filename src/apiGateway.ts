const BASE_URL = {
  pokemon: 'https://pokeapi.co/api/v2/',
  digimon: 'https://digi-api.com/api/v1/'
};

type Endpoint = keyof typeof BASE_URL;

// Abstração
const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw new Error('Erro ao buscar dados');
  }
};

export const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // Número de pokemons na PokéAPI. Se não me engano eles estão seguindo a ordem da Pokedex de cada geração (excluindo os pokemons já inseridos).
  const url = `${BASE_URL.pokemon}pokemon/${randomId}`;
  return fetchData(url);
};

export const fetchRandomDigimon = async () => {
  const randomDigiId = Math.floor(Math.random() * 1421) + 1; // Número de digimons na DAPI, não sei a sequência certa pq pelo visto está utilizando pokemons fanmade também.
  const url = `${BASE_URL.digimon}digimon/${randomDigiId}`;
  return fetchData(url);
};