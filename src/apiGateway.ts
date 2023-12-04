const BASE_URL = {
    pokemon: 'https://pokeapi.co/api/v2/',
    digimon: 'https://digi-api.com/api/v1/'
  };
  
  export const fetchRandomPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const response = await fetch(`${BASE_URL.pokemon}pokemon/${randomId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar Pokémon aleatório:', error);
      throw new Error('Erro ao buscar Pokémon aleatório');
    }
  };
  
  export const fetchRandomDigimon = async () => {
    try {
      const response = await fetch(`${BASE_URL.digimon}digimon/random`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar Digimon aleatório:', error);
      throw new Error('Erro ao buscar Digimon aleatório');
    }
  };