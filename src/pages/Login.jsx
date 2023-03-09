import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';

export default function Login() {
  const history = useHistory();

  const {
    email,
    setEmail,
    setSenha,
    habilitarDesabilitar,
  } = useContext(AppReceitasContext);
  return (
    <div>
      <label htmlFor="email-input">
        E-mail:
        <input
          data-testid="email-input"
          type="email"
          name="email-input"
          onChange={ (event) => { setEmail(event.target.value); } }
        />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          name="password-input"
          onChange={ (event) => { setSenha(event.target.value); } }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick={ () => {
          localStorage.setItem('user', JSON.stringify({ email }));
          history.push('/meals');
        } }
        disabled={ habilitarDesabilitar }
      >
        Entrar
      </button>
    </div>
  );
}
