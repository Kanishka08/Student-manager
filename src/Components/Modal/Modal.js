
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('root1');

const Modal = ({ children, onClose }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={stopPropagation}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
