import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './GridCard.module.scss'


function GridCard({ cartoes, onEdit, onDelete, onAdd }) {
  return (
    <div className={styles.gridContainer}>
      {cartoes.map((cartao) => (
        <div className={styles.cardWrapper} key={cartao.id}>
          <div className={styles.Card}>
            <div className={styles.cardHeader}>
              <h4>{cartao.nome}</h4>
              <div className={styles.BtnsCard}>
                <button onClick={() => onEdit(cartao)} className={styles.EditButton} title="Editar cartão">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => onDelete(cartao.id)} className={styles.DeleteButton} title="Excluir cartão">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
            {cartao.imagem && <img src={cartao.imagem} alt="Imagem do cartão" className={styles.cardImage} />}
            <p className={styles.cardDescription}>{cartao.descricao}</p>
          </div>
        </div>
      ))}
      <div className={styles.cardWrapper}>
        <div className={`${styles.Card} ${styles.AddCard}`} onClick={onAdd}>
          <div className={styles.AddContent}>
            <span className={styles.AddIcon}>+</span>
            <span>Adicionar Cartão</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridCard;
