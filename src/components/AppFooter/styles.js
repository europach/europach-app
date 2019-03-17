import styled from 'styled-components'

export const AppFooterInner = styled.div`
  max-width: 660px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 468px) {
    max-width: 85%;
  }
`;

export const FooterItem = styled.div`
  padding-top: 20px
`;