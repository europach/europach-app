import styled from 'styled-components'

export const FilterBtn = styled.div`
  display: inline-block;
  margin-right: 32px;
  font-size: 16px;
  font-family: 'Lekton', sans-serif;
  color: #555657;
  cursor: pointer;

  &:hover {
    color: #e30613;
  }

  &:active {
    color: #e30613;
    border-bottom: 2px solid #e30613;
  }
`;