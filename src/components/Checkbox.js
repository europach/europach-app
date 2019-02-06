import React from "react";
import styled, { css } from 'styled-components'

const Button = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.isSelected && css`
    background: palevioletred;
    color: white;
  `}
`;

const CheckboxButton = ({ label, isSelected }) => (
  <Button isSelected={isSelected}>
    { label }
  </Button>
);

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />

      <CheckboxButton label={label} isSelected={isSelected} />
    </label>
  </div>
);

export default Checkbox;