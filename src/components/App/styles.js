import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
`

export const AppNav = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`

export const AppNavInner = styled.div`
  max-width: 660px;
  width: 100%;

  @media (max-width: 468px) {
    max-width: 85%;
  }
`

export const AppMain = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 468px) {
    max-width: 85%;
  }
`

export const AppFooter = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
`
