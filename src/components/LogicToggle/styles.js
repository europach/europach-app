import styled from 'styled-components'

export const FilterBtn = styled.div`
  display: inline-block;
  margin-right: 32px;
  margin-top: 8px;
  font-size: 16px;
  font-family: 'Lekton', serif;
  color: #555657;
  cursor: pointer;

  &:hover {
    color: #e30613;
  }

  ${({ active }) =>
    active &&
    `
    color: #e30613;
    border-bottom: 2px solid #e30613;
  `}
`
