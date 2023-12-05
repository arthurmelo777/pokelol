import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate('/pokemon/random'); // Redireciona para a página do Pokémon aleatório
  };

  const handleDigimonClick = () => {
    navigate('/digimon/random');
  }

  return (
    <div>
      <h1>Consulta de Pokemon e Digimon</h1>
      <p>Deseja saber sobre algum Pokemon ou algum Digimon Você veio ao lugar certo!</p>
      <br />
      <p>Escolha sobre qual universo você quer pesquisar.</p>

      <button onClick={handlePokemonClick}>Pokemon</button>
      <button onClick={handleDigimonClick}>Digimon</button>

      <br />
      <h3>Desenvolvido por Bruno Lins e Arthur de Melo</h3>
    </div>
  )
}

export default HomePage