import React from 'react';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokemonPage from './components/PokemonPage';
import LoLPage from './components/LoLPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/pokemon" element={<PokemonPage nome='' foto='' tipos={['Normal', 'Eletrico']} />}></Route>
        <Route path="/lol" element={<LoLPage nome='Aatrox' foto='' classe=''/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
