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
  overflow-y: scroll;

  ${props => props.show && css`
    display: block;
  `}
`;

export const ModalMain = styled.section`
  background: #fbe9e7;
  margin: 72px auto;
  max-width: 660px;
  width: 100%;
  overflow-y: scroll;

  @media (max-width: 468px) {
    max-width: 348px;
  }
`