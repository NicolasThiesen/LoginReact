import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../img/senai_logo.png'


export default function Header() {
  return (
    <Container>
      <div className="main-header">
        <Link to="/">
          <img height='45p00x' width='300px' src={Logo} alt=''></img>
        </Link>
        <div className="buttons">
          <Link to="/cadastro">
            <button>Cadastrar</button>
          </Link>
          <Link to="/">
            <a href="/">Login</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
