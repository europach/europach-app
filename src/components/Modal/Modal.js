import React from 'react'
import { ModalContainer, ModalMain } from './styles'

export const Modal = ({ show, children }) => {
  return (
    <ModalContainer show={show}>
      <ModalMain>{children}</ModalMain>
    </ModalContainer>
  )
}
