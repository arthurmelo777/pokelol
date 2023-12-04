const express = require('express');
const axios = require('axios');
const path = require('path')
const app = express();
const PORT = 8080;


// Define o caminho para a pasta 'build' do seu aplicativo React
const caminhoBuild = 'C:\\Users\\bruno\\pokelol\\public'; // Certifique-se de especificar corretamente o caminho


// Servir arquivos estáticos da pasta 'build' do seu aplicativo React
app.use(express.static(caminhoBuild));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(caminhoBuild, 'index.html'));
});

app.get('/pokemon/:numero', async (req, res) => {
  try {
    const { numero } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    const pokemonData = response.data;

    // Filtra os dados para retornar apenas informações relevantes
    const pokemonInfo = {
      nome: pokemonData.name,
      altura: pokemonData.height,
      peso: pokemonData.weight,
      tipos: pokemonData.types.map((tipo) => tipo.type.name),
    };

    res.json(pokemonInfo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações do Pokémon' });
  }
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});