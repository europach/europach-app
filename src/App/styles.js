import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const AppNav = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const AppNavInner = styled.div`
  max-width: 660px;
  width: 100%;

  @media (max-width: 468px) {
    max-width: 85%;
  }
`;

export const AppMain = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 0;
  width: 100%;
  max-width: 660px;

  @media (max-width: 468px) {
    max-width: 85%;
  }
`;

export const AppFooter = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

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