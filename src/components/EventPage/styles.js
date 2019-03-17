import styled from 'styled-components'

export const BackArrow = styled.div`
  padding: 0 0 16px;
`;

export const CenteredWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const EventWrapper = styled.div`
  display: flex;
`

export const EventNav = styled.div`
  width: 40%;
  margin-right: 10%;
  padding: 24px 0 12px 0;
`

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const EventNavTitle = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
  font-family: 'Lekton', serif;
`

export const EventNavName = styled.div`
  font-size: 14px;
  padding-top: 2px;
  font-family: 'Open Sans',sans-serif;
  font-weight: bold;
`

export const Break = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #eed5ca;
  margin: 1em 0;
  padding: 0;
`

export const TextItems = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  word-wrap: break-word;
`

export const TextListItem = styled.li`
  margin-bottom: 8px;

  ${({ lastItem }) => lastItem && `
    margin-bottom: 0px;
  `}
`