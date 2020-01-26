import styled from 'styled-components'

export const EventList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: ${props => props.padding || '0 0 0 20px'};
  width: ${props => props.width};
  max-width: 600px;
  box-sizing: border-box;

  @media (max-width: 468px) {
    max-width: ${props => props.mobileMaxWidth || '348px'};
  }
`

export const EventItem = styled.li`
  list-style-type: none;
  padding-bottom: 16px;
  width: 100%;

  ${({ lastItem }) =>
    lastItem &&
    `
    padding-bottom: 0px;
  `}
`
