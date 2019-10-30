import React, { Component }from 'react';
import Header from './Header';
import Tablero from './Tablero';
import Carta from './Carta'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tablero />
        <Carta />
      </div>
    );
  }
}

export default App;
