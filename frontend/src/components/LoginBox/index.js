import React from 'react';
import Logo from '../img/logo_sesi.png'
import { Container } from './styles';

export default function LoginBox() {
  return (
    <Container>
        <div className="main">
            <div className="header">
                <img  src={Logo} alt='' ></img>
            </div>
            <h2>Login</h2> 
            <form>
                <label for='input-login'>Login</label>
                <input type="text" id="input-login" required autoFocus></input>
                <label for='input-senha'>Senha</label>
                <input type="password" id="input-senha" required autoFocus></input>
                <button type="submit">Logar</button>
            </form>
        </div>
    </Container>
  );
}
