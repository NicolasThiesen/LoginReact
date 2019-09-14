import React from 'react';
import Logo from '../img/logo_sesi.png'
import { Container } from './styles';

export default function LoginBox() {
  return (
    <Container>
        <div className="main">
            <div className="header">
                <img  src={Logo} alt='Logo Sesi' ></img>
            </div>
            <h2>Cadastro</h2> 
            <form>
                <label for='input-nome'>Nome</label>
                <input type="text" id="input-nome" required autoFocus></input>
                <label for='input-email'>E-mail</label>
                <input type="e-mail" id="input-email" required autoFocus></input>
                <label for='input-senha'>Senha</label>
                <input type="password" id="input-senha" required autoFocus></input>
                <label for='input-rsenha'>Repita a senha</label>
                <input type="e-mail" id="input-rsenha" required autoFocus></input>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </Container>
  );
}
