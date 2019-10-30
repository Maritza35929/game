import React, {Component} from 'react';
import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo">React-Cartas</div>
        <div>
          <button className="boton-reiniciar">
            reiniciar
          </button>
        </div>
        <div className="titulo">
          Intentos:
        </div>
      </header>
    );
  }
}
