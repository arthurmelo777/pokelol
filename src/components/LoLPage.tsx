import React from 'react'

interface Props {
  nome: string
  foto: string
  classe: string
}

function LoLPage({nome, foto, classe}: Props) {
  return (
    <div>
      <h1>Campeão: {nome}</h1>
      <img src={foto} alt='Foto do campeão'/>
      <h3>Classe: {classe}</h3>
    </div>
  )
}

export default LoLPage