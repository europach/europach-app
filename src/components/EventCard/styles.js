import styled from 'styled-components'

export const Card = styled.div`
  padding: 12px 12px 24px;
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  max-width: 100%;
  border-radius: 7px;
  border: 1px solid #f0f2f5;
  cursor: pointer;
  background-color: #FFF;
  transition: transform 0.2s ease-in-out, margin 0.2s linear, box-shadow 0.2s linear;
  line-height: 1;
  box-shadow: 3px 10px 61px -8px rgba(0,0,0,0.44);
  -webkit-box-shadow: 3px 10px 61px -8px rgba(0,0,0,0.44);
  -moz-box-shadow: 3px 10px 61px -8px rgba(0,0,0,0.44);

  &:hover {
    box-shadow: 0 8px 8px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
`

export const Logics = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const Logic = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 8px;
  margin: 8px 8px 0 0;
  background: rgba(216,216,216,0.3);
`

export const LogicText = styled.span`
  font-family: 'Lekton', serif;
  color: #4a4a4a;
  font-weight: 400;
  font-size: 12px;
`;