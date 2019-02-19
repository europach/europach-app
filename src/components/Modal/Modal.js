import React from 'react';
import { ModalContainer, ModalMain, ModalInner } from './styles';

export const Modal = ({ show, children }) => {
  return (
    <ModalContainer show={show}>
      <ModalMain>
        <ModalInner>
          {children}
        </ModalInner>
      </ModalMain>
    </ModalContainer>
  );
};