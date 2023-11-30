import React from 'react'

interface Props {
  nome: string
  foto: string
  tipos: string[]
}

function PokemonPage({nome, foto, tipos}: Props) {
  return (
    <div>
      <h1>Pokemon: {nome}</h1>
      <img src={foto} alt="" />
      {tipos.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default PokemonPage