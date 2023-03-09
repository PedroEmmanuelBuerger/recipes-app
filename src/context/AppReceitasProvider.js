import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { fetchApiComidas, fetchApiBebidas } from '../helpers/fetchApi';
import AppReceitasContext from './AppReceitasContext';
// Função para chamada da Api de comidas e bebidas. Ver endpoint
function AppReceitasProvider({ children }) {
  const [buscaPorComida, setBuscaPorComida] = useState('milk');
  const [buscaPorBebida, setBuscaPorBebida] = useState('');

  // Implementando lógica de armazenamento de e-mail e senha(LOGIN)
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Implementando lógica de habilitação do botão Entrar(LOGIN)
  const [habilitarDesabilitar, setHabilitarDesabilitar] = useState(true);
  const verificaEmaileSenha = () => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    const verifyEmail = regex.test(email);
    const minCharacters = 6;
    if (verifyEmail && senha.length > minCharacters) {
      setHabilitarDesabilitar(false);
    } else {
      setHabilitarDesabilitar(true);
    }
    return habilitarDesabilitar;
  };
  useEffect(() => { verificaEmaileSenha(); }, [email, senha]);

  const context = useMemo(() => ({
    buscaPorComida,
    setBuscaPorComida,
    buscaPorBebida,
    setBuscaPorBebida,
    // LOGIN
    email,
    setEmail,
    senha,
    setSenha,
    habilitarDesabilitar,
    setHabilitarDesabilitar,
    // LOGIN
  }), [
    buscaPorComida,
    setBuscaPorComida,
    buscaPorBebida,
    setBuscaPorBebida,
    email,
    setEmail,
    senha,
    setSenha,
    habilitarDesabilitar,
    setHabilitarDesabilitar,
  ]);

  return (
    <AppReceitasContext.Provider value={ context }>
      {children}
    </AppReceitasContext.Provider>
  );
}

AppReceitasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppReceitasProvider;
