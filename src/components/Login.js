import React from "react";
import { useState } from 'react';
import {Link} from 'react-router-dom'
import ImgLogin02 from "../Img/Login/imglogin.jpg"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Logar(event) {
    event.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Preencha todos os campos');
    } else {
      window.location.href = '/perfil';
    }
  }

  return (
  <body id="body-login-cadastro">
    <div id="container">
      <img src={ImgLogin02} alt={'Mulher fazendo login'} id="img-principal" />
      <div id="info-formulario">
        <form id="form-login-cadastro" name="form" action="/" onSubmit={Logar}>
          <h1 id="titulo-login-cadastro">
            <strong>LOGIN</strong>
          </h1>
          <br />
          <p>
            <label htmlFor="email">E-mail ou Telefone</label>
            <br />
            <input
              type="text"
              id="email"
              className="input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </p>
          <br />
          <p>
            <label htmlFor="senha">Senha</label>
            <br />
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </p>
          <br />
          <button id="botao-login-cadastro">Login</button>
          <br />
          <Link to="/cadastro" id="link-criar-conta">
            Criar uma Conta
          </Link>
        </form>
      </div>
    </div>
  </body>
  );
}
