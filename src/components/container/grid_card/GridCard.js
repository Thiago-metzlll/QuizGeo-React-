import React from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './GridCard.module.scss'


function GridCard({ cartoes, onEdit, onDelete, onAdd, larguraCartao = 250, alturaCartao = 120, GAP = 10 }) {
  const colunas = 5;
  const linhas = Math.ceil((cartoes.length + 1) / colunas); 
  const cellWidth = larguraCartao + GAP;
  const cellHeight = alturaCartao + GAP;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * colunas + columnIndex;

    if (index === cartoes.length) {
      return (
        <div style={{ ...style, padding: '10px' }}>
          <div className={`${styles.Card} ${styles.AddCard}`}>
            <button onClick={onAdd} className={styles.AddButton}>
              + Adicionar Cartão
            </button>
          </div>
        </div>
      );
    }

    if (index > cartoes.length) return null;

    const cartao = cartoes[index];

    return (
      <div style={{ ...style, padding: '10px' }} key={cartao.id}>
        <div className={styles.Card}>
          <h4>{cartao.nome}</h4>
          <p className={styles.cardDescription}>{cartao.descricao}</p>
          <img src={cartao.imagem} alt="Imagem do cartão" className={styles.cardImage} />
          <div className={styles.BtnsCard}>
            <button onClick={() => onEdit(cartao)} className={styles.EditButton} title="Editar cartão">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => onDelete(cartao.id)} className={styles.DeleteButton} title="Excluir cartão">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Grid
      columnCount={colunas}
      rowCount={linhas}
      columnWidth={cellWidth}
      rowHeight={cellHeight}
      height={600}
      width={cellWidth * colunas}
    >
      {Cell}
    </Grid>
  );
}

export default GridCard;
