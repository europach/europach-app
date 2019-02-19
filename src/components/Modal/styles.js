import styled, { css } from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  z-index: 2;

  ${props => props.show && css`
    display: block;
  `}
`;

export const ModalMain = styled.section`
  position:fixed;
  background: white;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const ModalInner = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
`