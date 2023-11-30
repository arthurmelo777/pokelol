import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button name="Pokemon"></Button>
      <br />
      <Button name="LoL"></Button>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
