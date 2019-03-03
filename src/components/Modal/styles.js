import styled, { css } from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: #fbe9e7;
  display: none;
  z-index: 3;

  ${props => props.show && css`
    display: block;
  `}
`;

export const ModalMain = styled.section`
  position:fixed;
  background: #fbe9e7;
  left: 50%;
  transform: translate(-50%);
  max-width: 660px;
  width: 100%;

  @media (max-width: 468px) {
    max-width: 348px;
  }
`