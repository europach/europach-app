import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: solid 1px black;
`;

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

export const Date = styled.div`
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: inline-block;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: red;
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%,-50%);
  cursor: pointer;
`