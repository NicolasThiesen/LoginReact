import React from 'react';
import { Container } from './styles';
import Logo from '../img/senai_logo.png'

export default function Header() {
  return (
    <Container>
        <img height='45px' width='300px' src={Logo}></img>
        <a>Login</a>
        <button>Cadastrar</button>
    </Container>
  );
}
