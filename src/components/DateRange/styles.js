import styled from 'styled-components'

export const DateContainer = styled.div`
  display: inline-block;

  ${({ start }) => start && `
    margin-right: 8px;
  `}

  ${({ end }) => end && `
    margin-left: 8px;
  `}
`