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
    max-width: 348px;
  }
`;

export const AppMain = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 0;
  max-width: 660px;

  @media (max-width: 468px) {
    max-width: 348px;
  }
`;

export const AppFooter = styled.div`
  height: 10vh;
  padding: 1em;
  width: 100%;
`;

