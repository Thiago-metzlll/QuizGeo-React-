import React, { useState } from 'react';
import styles from './Cadastro.module.scss';
import { useNavigate } from 'react-router-dom';



function CadastroForm({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, email, senha });
    setNome('');
    setEmail('');
    setSenha('');
    navigate('/cards'); // redireciona após o cadastro

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroForm;