import styled from 'styled-components'

export const EventList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 20px;
  width: ${props => props.width};
  max-width: 600px;
`;

export const EventItem = styled.li`
  list-style-type: none;
  padding-bottom: 20px;
  width: 100%;
`;