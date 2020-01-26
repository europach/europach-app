import styled, { css } from 'styled-components'

export const StyledCheckbox = styled.span`
  background: transparent;
  border-radius: 18px;
  border: 1px solid #989898;
  color: #989898;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.isSelected &&
    css`
      background: #5892dd;
      border: 1px solid #5892dd;
      color: white;
    `}
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
