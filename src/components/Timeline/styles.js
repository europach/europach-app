import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const EventList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const EventItem = styled.li`
  list-style-type: none;
  padding-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
`;