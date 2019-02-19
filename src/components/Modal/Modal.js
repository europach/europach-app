import React from 'react';
import { ModalContainer, ModalMain } from './styles';

export const Modal = ({ handleClose, show, children }) => {
  return (
    <ModalContainer show={show}>
      <ModalMain>
        {children}
        <button onClick={handleClose}>close</button>
      </ModalMain>
    </ModalContainer>
  );
};