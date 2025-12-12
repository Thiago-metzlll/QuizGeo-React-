import CardItem from '../../ui/pastateste/CardItem';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './FormsCard.module.scss'



function FormsCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const cartaoEdit = location.state?.cartao;

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    if (cartaoEdit) {
      setNome(cartaoEdit.nome);
      setDescricao(cartaoEdit.descricao);
      setImagem(cartaoEdit.imagem);
    }
  }, [cartaoEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCartao = {
      ...cartaoEdit, 
      nome,
      descricao,
      imagem,
    };

    // Pega os cartões do localStorage
    const dados = localStorage.getItem('cartoes');
    const cartoes = dados ? JSON.parse(dados) : [];

    let cartoesAtualizados;
    if (cartaoEdit) {
      cartoesAtualizados = cartoes.map((c) =>
        c.id === novoCartao.id ? novoCartao : c
      );
    } else {
      const novoId = cartoes.length > 0 ? Math.max(...cartoes.map(c => c.id)) + 1 : 1;
      cartoesAtualizados = [...cartoes, { ...novoCartao, id: novoId }];
    }

    localStorage.setItem('cartoes', JSON.stringify(cartoesAtualizados));

    alert('Cartão salvo!');
    navigate('/home');
  };

  return (
    <CardItem
      nome={nome}
      descricao={descricao}
      imagem={imagem}
      onNomeChange={(e) => setNome(e.target.value)}
      onDescricaoChange={(e) => setDescricao(e.target.value)}
      onImagemChange={(e) => setImagem(e.target.value)}
      onSubmit={handleSubmit}
      titulo={cartaoEdit ? 'Editar Cartão' : 'Criar Novo Cartão'}
    />
  );
}

export default FormsCard