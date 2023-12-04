import React from 'react';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokemonPage from './components/PokemonPage';
import DigimonPage from './components/DigimonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/pokemon/random" element={<PokemonPage />} />
        <Route path="/digimon/random" element={<DigimonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
