import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate('/pokemon');
  }

  const handleLoLClick = () => {
    navigate('/lol');
  }

  return (
    <div>
      <h1>Consulta de Pokemon e Campeão do LoL</h1>
      <p>Deseja saber sobre algum campeão do LoL ou algum Pokemon? Você veio ao lugar certo!</p>
      <br />
      <p>Escolha sobre qual universo você quer pesquisar.</p>

      <button onClick={handlePokemonClick}>Pokemon</button>
      <button onClick={handleLoLClick}>LoL</button>

      <br />
      <h3>Desenvolvido por Bruno Lins e Arthur de Melo</h3>
    </div>
  )
}

export default HomePage